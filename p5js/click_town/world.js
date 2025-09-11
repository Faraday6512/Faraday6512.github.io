let world_checker = 0; // world_checker  = Check which workspace

let log = 0;
let gold = 0;
let iron = 0;
let iron_cnt = 0;   // count iron farming 
let rocket_body = 0;
let rocket_engine = 0;
let rocket_head = 0;

let upgrade_fee = [1, 10, 50, 100];    // upgrade fee
let forest_upgrade_num = [1, 5, 25, 50];    // upgrade farming 
let mine_upgrade_num = [1, 5, 25, 50];

let forest_up_num = 0;
let forest_up_num_check = 0;    // check upgrade count

let mine_up_num = 0;
let mine_up_num_check = 0;

function market()
{
    world_checker = 0;
    image(gImages[MARKET_BACKGROUND], 0, 100, width, height);
    market_ui();
}

function forest()
{
    world_checker = 1;
    image(gImages[FOREST_BACKGROUND], 0, 100, 1000, 900);
}

function gamble()
{
    world_checker = 2;
    background('#FFFA78');
}

function lab()
{
    world_checker = 3;
    image(gImages[LAUNCHSIDE], 0, 100, width, height);
}

function mine()
{
    world_checker = 4;
    image(gImages[MINE_BACKGROUND], 0, 100, width, height);
}

function forest_farming()
{
    if(mouseX > 0 && mouseX < 1000 && mouseY > 100 && mouseY < 1500)
    {
    // gSound[LOG_SOUND].play();
    log += forest_upgrade_num[forest_up_num_check];
    }
}

function mine_farming()
{

    if(mouseX > 0 && mouseX < 1000 && mouseY > 100 && mouseY < 1500)
    {
        iron_cnt ++;
        message = 10 - iron_cnt + ' Left';
        if(iron_cnt == 10)
        {
        iron += mine_upgrade_num[mine_up_num_check];
        iron_cnt = 0;
        gSound[IRON_SOUND].play();
         }
    }
    
}

function world_judge()
{

    if(world_checker != 0)
    {
    log_sell_button.hide();
    log_all_sell_button.hide();
    iron_sell_button.hide();
    iron_all_sell_button.hide();
    forest_upgrade.hide();
    mine_upgrade.hide();
    } 
    else
    {
    log_sell_button.show();
    log_all_sell_button.show();
    iron_sell_button.show();
    iron_all_sell_button.show();
    forest_upgrade.show();
    mine_upgrade.show();
    }
  
    if(world_checker != 2)
    {
      machine_button.hide();
    }
    else
    {
      machine_button.show();
    }

}