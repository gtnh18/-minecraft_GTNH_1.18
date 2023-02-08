onEvent('recipes', event => {
	event.remove({output:"crafting_table"});
    //event.shapeless is a shortcut for event.recipes.minecraft.crafting_shapeless
    event.shaped(
        Item.of('minecraft:crafting_table', 1), // arg 1: output
        [ 
          'LLL', 
          'LFL', // arg 2: the shape (array of strings)
          'LLL'  
        ],
        {
          F: '#antimatter:knife', 
          L: '#minecraft:logs' 
        }
      )

    console.log('Hello! The recipe event has fired!')
})