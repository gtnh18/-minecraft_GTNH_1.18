onEvent('recipes', event => {
	event.remove({output:"#forge:nuggets/bronze"});
    //event.shapeless is a shortcut for event.recipes.minecraft.crafting_shapeless
    event.shapeless(
        Item.of('antimatter_shared:nugget_bronze', 1), // arg 1: output
        [ 
        'antimatter_shared:ingot_bronze'
        ]
    )
})