# [rightClick.js](http://candh.github.io/rightClick/)
Right clicks (context menus) made easy for the web.


# How To 

## Build up your menu
    <div id="ctx-menu-1" class="menu">
        <ul>
            <li>Stop</li>
            <li>Play</li>
            <li class="disabled">Cocoa</li>
            <li>Butter</li>
            <li>Kisses</li>
            <li>Very long menu item</li>
            <li>Sub Menu
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Very long menu item</li>
                </ul>
            </li>
        </ul>
    </div>
    
## Call the plugin

    $('#target1').rightClick('#ctx-menu-1');
    
## That's all folks!

    
# Development and Contribution
Clone the repo and go into the folder and open up a terminal there. Issue this command and wait for all the required modules to download and install

    npm install

and fire up a browser and go to localhost:3000    
    
Expect more features in the future. Feel free to fork! Any contribution will be helpful.
By [@candhforlife](http://www.twitter.com/candhforlife)
