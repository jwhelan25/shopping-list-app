function start()  {
        //create event listener for adding items
        $('#js-shopping-list-form').submit(function (evt) {
            evt.preventDefault()
            const addInput = $(this).find('input[name="shopping-list-entry"]').val()
            addItems(addInput)
        })
        //create event listener for checking items
        $('.shopping-item-toggle').click(function(evt){
            $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
        })
        //create event listener for deleting items
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
    }

$(start())