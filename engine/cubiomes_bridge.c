#include "finders.h"
#include <stdint.h>
#include <stdlib.h>

#define RESULT_CAPACITY 6000

/* Layout: count, followed by repeating [structureType, blockX, blockZ]. */
static int32_t results[1 + RESULT_CAPACITY * 3];

static int version_from_code(int code)
{
    switch (code) {
        case 121: return MC_1_21_1;
        case 120: return MC_1_20;
        case 119: return MC_1_19;
        case 118: return MC_1_18;
        case 117: return MC_1_17;
        case 116: return MC_1_16;
        case 115: return MC_1_15;
        case 114: return MC_1_14;
        case 113: return MC_1_13;
        case 112: return MC_1_12;
        default: return MC_1_21_1;
    }
}

static void add_result(int type, int x, int z, int radius)
{
    if (results[0] >= RESULT_CAPACITY)
        return;
    int64_t xx = x;
    int64_t zz = z;
    int64_t rr = radius;
    if (xx * xx + zz * zz > rr * rr)
        return;
    int i = 1 + results[0] * 3;
    results[i] = type;
    results[i + 1] = x;
    results[i + 2] = z;
    results[0]++;
}

static void scan_structure(Generator *g, uint64_t seed, int mc, int type, int radius)
{
    StructureConfig config;
    if (!getStructureConfig(type, mc, &config) || config.regionSize <= 0)
        return;

    int region_blocks = config.regionSize * 16;
    int range = radius / region_blocks + 2;
    for (int rz = -range; rz <= range; rz++) {
        for (int rx = -range; rx <= range; rx++) {
            Pos pos;
            if (!getStructurePos(type, mc, seed, rx, rz, &pos))
                continue;
            if (!isViableStructurePos(type, g, pos.x, pos.z, 0))
                continue;
            add_result(type, pos.x, pos.z, radius);
        }
    }
}

static void scan_strongholds(Generator *g, uint64_t seed, int mc, int radius)
{
    StrongholdIter iterator;
    initFirstStronghold(&iterator, mc, seed);
    for (int i = 0; i < 128; i++) {
        if (nextStronghold(&iterator, g) <= 0)
            break;
        add_result(100, iterator.pos.x, iterator.pos.z, radius);
        int64_t x = iterator.nextapprox.x;
        int64_t z = iterator.nextapprox.z;
        if (i > 8 && x * x + z * z > (int64_t)radius * radius)
            break;
    }
}

int32_t *msf_result_ptr(void)
{
    return results;
}

int msf_find(int64_t signed_seed, int version_code, int dimension, int radius)
{
    uint64_t seed = (uint64_t)signed_seed;
    int mc = version_from_code(version_code);
    if (radius < 1000) radius = 1000;
    if (radius > 16000) radius = 16000;
    results[0] = 0;

    Generator generator;
    setupGenerator(&generator, mc, 0);

    if (dimension == DIM_NETHER) {
        applySeed(&generator, DIM_NETHER, seed);
        scan_structure(&generator, seed, mc, Fortress, radius);
        scan_structure(&generator, seed, mc, Bastion, radius);
        scan_structure(&generator, seed, mc, Ruined_Portal_N, radius);
    } else if (dimension == DIM_END) {
        applySeed(&generator, DIM_END, seed);
        scan_structure(&generator, seed, mc, End_City, radius);
    } else {
        applySeed(&generator, DIM_OVERWORLD, seed);
        scan_structure(&generator, seed, mc, Village, radius);
        scan_structure(&generator, seed, mc, Ancient_City, radius);
        scan_structure(&generator, seed, mc, Trial_Chambers, radius);
        scan_strongholds(&generator, seed, mc, radius);
        scan_structure(&generator, seed, mc, Mansion, radius);
        scan_structure(&generator, seed, mc, Monument, radius);
        scan_structure(&generator, seed, mc, Desert_Pyramid, radius);
        scan_structure(&generator, seed, mc, Jungle_Temple, radius);
        scan_structure(&generator, seed, mc, Outpost, radius);
        scan_structure(&generator, seed, mc, Ruined_Portal, radius);
        scan_structure(&generator, seed, mc, Igloo, radius);
        scan_structure(&generator, seed, mc, Shipwreck, radius);
    }
    return results[0];
}
