const STORE = [
    {name: "apples", checked: false},
    {name: "oranges", checked: false},
    {name: "milk", checked: true},
    {name: "bread", checked: false}
  ]

  //function to render the shopping items list
function renderShoppingList(){
    let shoppingListItems = generateShoppingItems(STORE)

    $('.js-shopping-list').html(shoppingListItems)
    console.log(shoppingListItems)
}
//subfunction to create the list from the STORE for all items
function generateShoppingItems(arr){
    let results = ``
    for(let i=0;i<arr.length;i++){
        results = results + generateOneItemForList(arr[i])
    }
    return results
}
//subfunction to create one item for the list 
function generateOneItemForList(obj){
    let checkthrough = ``
    if(obj.checked === true){
        checkthrough = ` shopping-item__checked`
    }
    let template =`<li>
    <span class="shopping-item${checkthrough}">${obj.name}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
  return template
}



/*        //create event listener for adding items
        $('#js-shopping-list-form').submit(function (evt) {
            evt.preventDefault()
            const addInput = $(this).find('input[name="shopping-list-entry"]').val()
            addItems(addInput)
        })
        //create event listener and process for checking items
        $('.shopping-item-toggle').click(function(evt){
            $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
        })
        //create event listener and process for deleting items
        $('.shopping-item-delete').click(function(evt){
           $(this).closest('li').remove()
        })
    }

    //callback function for adding items to the list
    function addItems(inp) { 
        $('ul.shopping-list').append(`<li>
        <span class="shopping-item">${inp}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
    
*/
function startShoppingList(){
    renderShoppingList()
    //handleNewItemSubmit()
   // handleItemCheckClicked()
   // handleDeleteItemClicked()
}


$(startShoppingList)