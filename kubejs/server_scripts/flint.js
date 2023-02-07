onEvent('recipes', event => {
	event.remove({output:"flint"});
    //event.shapeless is a shortcut for event.recipes.minecraft.crafting_shapeless
    event.shapeless(
        Item.of('minecraft:flint', 1), // arg 1: output
        [ 
        'minecraft:gravel',
        'minecraft:gravel', //arg 2: the array of inputs
        'minecraft:gravel'
        ]
    )

    console.log('Hello! The recipe event has fired!')
})