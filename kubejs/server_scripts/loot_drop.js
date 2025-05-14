LootJS.modifiers(event => {
    event.addEntityLootModifier("minecraft:creeper").addLoot("10x minecraft:gunpowder")
    event.addEntityLootModifier("minecraft:zombie").removeLoot("minecraft:rotten_flesh").addLoot(['10x minecraft:copper_ingot',"minecraft:cooked_beef","minecraft:leather"])
    event.addEntityLootModifier("minecraft:skeleton").removeLoot(["minecraft:bone","minecraft:arrow","minecraft:bow"]).addLoot(["10x minecraft:iron_ingot","minecraft:redstone","minecraft:quartz"])
    event.addEntityLootModifier("minecraft:spider").removeLoot(["minecraft:string","minecraft:spider_eye"]).addLoot(["10x minecraft:lapis_lazuli","minecraft:gold_ingot","minecraft:amethyst_shard"])
    event.addEntityLootModifier("minecraft:enderman").removeLoot("minecraft:ender_pearl").addLoot(["minecraft:diamond","minecraft:netherite_ingot"," minecraft:blaze_rod "])
})