onEvent('recipes', event => {
	event.remove({output:"cogwheel"});
    //event.shapeless is a shortcut for event.recipes.minecraft.crafting_shapeless
    event.shapeless(
        Item.of('create:cogwheel', 1), // arg 1: output
        [ 
        'antimatter_shared:nugget_bronze',
        'minecraft:acacia_planks'
        ]
    )
})