const STORE = [
    {name: "apples", checked: false, id:0},
    {name: "oranges", checked: false, id:1},
    {name: "milk", checked: true, id:2},
    {name: "bread", checked: false, id:3}
  ]

  let numberOfItemsInStore = STORE.length

  //function to render the shopping items list
function renderShoppingList(){
    let shoppingListItems = generateShoppingItems(STORE)
    $('.js-shopping-list').html(shoppingListItems)
}

//////////////////////////////////////////////////////////////////////////////////

//subfunction to create the list from the STORE for all items
function generateShoppingItems(arr){
    let results = ``
    for(let i=0;i<arr.length;i++){
        results = results + generateItemElement(arr[i])
    }
    return results
}
//subfunction to create one item for the list 
function generateItemElement(obj){
    let checkthrough = ``
    if(obj.checked === true){
        checkthrough = ` shopping-item__checked`
    }
    let template =`<li class="js-item-index-element" 
    data-item-id="${obj.id}">
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

//////////////////////////////////////////////////////////////////////////////////

//function to handle the submission of new items
function handleNewItemSubmit(){
    $('#js-shopping-list-form').submit(function (evt) {
        evt.preventDefault()
        let newName = $(this).find('input[name="shopping-list-entry"]').val()
        addItems(newName)
        renderShoppingList()
    })
}
//function to add an item with a given name to the store
function addItems(newName){
    let newItem ={}
    newItem.name = newName
    newItem.checked = false
    newItem.id = numberOfItemsInStore
    STORE.push(newItem)
    numberOfItemsInStore += 1
}

///////////////////////////////////////////////////////////////////////////////

//function to toggle checked variable in a given item object
function handleItemCheckClicked(){
    
    
    $('ul.js-shopping-list').on('click','.shopping-item-toggle', function(evt){
        console.log("handleItemCheckClicked called")
        evt.preventDefault()
        let ident = $(this).closest('li').attr('data-item-id')
        console.log("ident is " + ident)
        toggleCheckedById(ident)
        renderShoppingList()
    })
}

//subfunction to toggle checked by using item id
function toggleCheckedById(idToToggle){
for(let i=0;i<STORE.length;i++){
    if(idToToggle == STORE[i].id){
      STORE[i].checked = !STORE[i].checked
    }}
}

////////////////////////////////////////////////////////////////////////////////

//subfunction to create new item in store after being passed the name

/*        //create event listener for adding items
        $('#js-shopping-list-form').submit(function (evt) {
            evt.preventDefault()
            const addInput = $(this).find('input[name="shopping-list-entry"]').val()
            addItems(addInput)
        })
        //create event listener and process for checking items
        
        //create event listener and process for deleting items
        $('.shopping-item-delete').click(function(evt){
           $(this).closest('li').remove()
        })
    }
    
*/
function startShoppingList(){
    renderShoppingList()
    handleNewItemSubmit()
    handleItemCheckClicked()
    //handleDeleteItemClicked()
}


$(startShoppingList)