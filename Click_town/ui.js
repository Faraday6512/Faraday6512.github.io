  let market_button; 
  let forest_button; 
  let gamble_button;
  let lab_button; 
  let mine_button;
  let log_sell_button;
  let log_all_sell_button;
  let iron_sell_button;
  let iron_all_sell_button;
  let machine_button;
  let bgm_slider;
  let bgm_loudness;
  let max_upgrade = 3;
  let random_machine;
  let launch_set;
  let log_check = 0 ;
  let log_cal = 0;
  let iron_check = 0;
  let iron_cal = 0;
  let set1 = 0; set2 = 0; set3 = 0;
  let launch_check = 0;
  let iconX = 1100;
  let iconY = 150;
  let UI_backcol = 220;
  let GoX = 600
  let GoY = 510
  let slot_image = GAMBLE_ICON;
  

function button()
{
    let but_sizeX = 200;
    let but_sizeY = 100;
    let but_posX = 200;

    market_button = createButton('Market');
    market_button.size(but_sizeX,but_sizeY);
    market_button.position(but_posX*0,0);
    market_button.mouseClicked(market);

    forest_button = createButton('Forest');
    forest_button.size(but_sizeX, but_sizeY);
    forest_button.position(but_posX*1,0);
    forest_button.mouseClicked(forest);

    gamble_button = createButton('Gamble');
    gamble_button.size(but_sizeX,but_sizeY);
    gamble_button.position(but_posX*2,0);
    gamble_button.mouseClicked(gamble);

    lab_button = createButton('Laboratory');
    lab_button.size(but_sizeX, but_sizeY);
    lab_button.position(but_posX*3, 0);
    lab_button.mouseClicked(lab);

    mine_button = createButton('Mine');
    mine_button.size(but_sizeX, but_sizeY);
    mine_button.position(but_posX*4, 0);
    mine_button.mouseClicked(mine);

    log_sell_button = createButton('Sell');
    log_all_sell_button = createButton('Sell');
    iron_sell_button = createButton('Sell');
    iron_all_sell_button = createButton('Sell');

    forest_upgrade = createButton('Forest upgrade');
    mine_upgrade = createButton('Mine upgrade');
    machine_button = createButton('Insert Coin X 100');
}

function inventory()
{
    push();
    fill(UI_backcol);
    noStroke();
    rect(1000,0,1500,1000);
    pop();
    push();
    textAlign(CENTER);
    imageMode(CENTER);
    text("Gold : " + gold, 1150, 155);
    image(gImages[GOLD_ICON], iconX, iconY);
    text("Log : " + log, 1150, 205);
    image(gImages[LOG_ICON], iconX, iconY+50);
    text("Iron : " + iron, 1150, 255);
    image(gImages[IRON_ICON],iconX, iconY+100 );
    text("      Rocket Head : " + rocket_head, 1150, 305);
    image(gImages[ROCKET_HEAD_ICON], iconX, iconY+150);
    text("      Rocket Body : " + rocket_body, 1150, 355);
    image(gImages[ROCKET_BODY_ICON], iconX, iconY+200);
    text("      Rocket Engine : " + rocket_engine, 1150, 405);
    image(gImages[ROCKET_ENGINE_ICON], iconX, iconY+250)
    pop();
    
    if(launch_check == 3)
    {
        push();
        noStroke();
        ellipseMode(CENTER);
        fill('black');
        rect(1100,500, 200,200);
        fill('red');
        ellipse(1200,600,100,100);
        pop();

        push();
        textStyle(BOLD);
        textSize(15);
        text("PUSH", 1180, 605);
        pop();

        if(mouseIsPressed == true && mouseX >= 1150 && mouseX <= 1250 && mouseY >=555 && mouseY <= 655)
        {
            launch_check = 4;
        }
    }
}

function sound_option()
{ 
    bgm_slider = createSlider(0,100,20);
    bgm_slider.position(1100,950);
}

function market_ui()
{       
    image(gImages[SELL_SIGN], 400, 125);
    image(gImages[BUY_SIGN], 400, 550);

    push();
    textSize(25);
    textStyle(BOLD);
    image(gImages[LOG_ICON], 300, 300);
    text("X 100     (1 Gold) ",350, 320 )

    image(gImages[LOG_ICON], 300, 350);
    text("X ALL     ("+ int(log_cal) +" Gold)" ,350, 370 )

    image(gImages[IRON_ICON], 300, 400);
    text("X 10      (1 Gold) ",350, 420 )

    image(gImages[IRON_ICON], 300, 450);
    text("X ALL     ("+ int(iron_cal) +" Gold)" ,350, 470 )

    pop();

    log_sell_button.size(50,25);
    log_sell_button.position(650,300);
    log_sell_button.mouseClicked(sell);

    log_all_sell_button.size(50,25);
    log_all_sell_button.position(650,350);
    log_all_sell_button.mouseClicked(sell);

    iron_sell_button.size(50,25);
    iron_sell_button.position(650,400);
    iron_sell_button.mouseClicked(sell)

    iron_all_sell_button.size(50,25);
    iron_all_sell_button.position(650,450);
    iron_all_sell_button.mouseClicked(sell);

    forest_upgrade.size(150,50);
    forest_upgrade.position(250, 700); 
    forest_upgrade.mouseClicked(upgrade);

    mine_upgrade.size(150,50);
    mine_upgrade.position(600,700);
    mine_upgrade.mouseClicked(upgrade);

    push();
    textSize(20);
    textStyle(BOLD);
    fill('red');

    if(forest_up_num_check < max_upgrade)
    {
    text("You need " + upgrade_fee[forest_up_num_check] + " Gold ", 250, 780);
    } 
    else if(forest_up_num_check == max_upgrade)
    {
        text("Upgrade Complete ", 250, 780);
    }

    if(mine_up_num_check < max_upgrade)
    {
    text("You need " + upgrade_fee[mine_up_num_check] + " Gold ", 600, 780);
    } 
    else if(mine_up_num_check == max_upgrade)
    {
        text("Upgrade Complete ", 600, 780);
    }
    
    pop();

}

function sell()
{
    if(mouseY >= 300 && mouseY <= 325)
    {
        if(log-100 >= 0)
        {
        message = 'Sell 100 Log';
        gSound[SELL_SOUND].play();
        log -= 100;
        gold ++;
        } 
    }
    else if(mouseY >= 350 && mouseY <= 375)
    {
        if(log_all_check >=0)
        {
        message = 'You sell ' + int(log_cal) * 100 + ' log';
        gSound[SELL_SOUND].play();
        log -= (int(log_cal) * 100);
        gold += int(log_cal);
        }
    }
    else if(mouseY >= 400 && mouseY <= 425)
    {
        if( iron-10>= 0)
        {
        message = 'Sell 10 iron'
        gSound[SELL_SOUND].play();
        iron -= 10;
        gold++;
        }

    }
    else if(mouseY >= 450 && mouseY <= 475)
    {
        if(iron_all_check >= 0)
        {
        message = 'You sell ' + int(iron_cal) *10 + ' iron';
        gSound[SELL_SOUND].play();
        iron -= (int(iron_cal) * 10);
        gold += int(iron_cal);
        }
    }
}

function upgrade()
{
    if(mouseX >= 250 && mouseX <= 400)
    {
        if(gold-upgrade_fee[forest_up_num_check] >= 0 && forest_up_num_check < max_upgrade)
        {
            gSound[SELL_SOUND].play();
            gold -= upgrade_fee[forest_up_num_check];
            forest_up_num_check++;
            message = 'Upgrade complete' + ' Forest Level ' + forest_up_num_check;
        }
    }
    else if (mouseX >= 600 && mouseX <= 750)
    {
        if(gold-upgrade_fee[mine_up_num_check] >= 0 && mine_up_num_check < max_upgrade)
        {
            gSound[SELL_SOUND].play();
            gold -= upgrade_fee[mine_up_num_check];
            mine_up_num_check++;
            message = 'Upgrade complete' + ' Mine Level ' + mine_up_num_check;
        }
    }

}

function alert()
{
    push();
    fill('red');    
    textStyle(BOLD);
    textSize(20);
    text(message,1050, 60);
    pop();
}

function vending_machine()
{
    if(world_checker == 2)
    {
    image(gImages[slot_image], 450, 380, 50, 50)
    }
    machine_button.size(250,100);
    machine_button.position(350,500)
    machine_button.mouseClicked(machine_on);
}

function machine_on()   // gamble machine function
{
    if(gold - 100 >= 0)
    {
        gSound[SLOT_SOUND].play();
        gold -= 100;
        random_machine = int(random(0,11));
        print(random_machine);
        switch(random_machine)
        {
            case 0:
                slot_image = LOG_ICON;
                log += 4000
                message = "Get 4000 Log!";
                break;
            case 1:
                slot_image = IRON_ICON;
                iron += 400
                message = "Get 400 Iron!";
                break;
            case 2:
                slot_image = GOLD_ICON;
                gold += 400
                message = "Get 400 Gold!";
                break;
            case 3:
                slot_image = ROCKET_ENGINE_ICON;
                rocket_engine ++;
                    message = "Get Rocket engine!";
                    break;
            case 4:
                slot_image = ROCKET_BODY_ICON;
                rocket_body ++;
                message = "Get Rocket body!";
                break;
            case 5:
                slot_image = ROCKET_HEAD_ICON;
                rocket_head ++;
                message = "Get Rocket head!";
                break;        
            case 6:
                slot_image = GAMBLE_ICON;
                message = "Draw a blank!"
                break;
            case 7: 
                slot_image = GOLD_ICON;
                message = "Get 100 Gold!"
                gold += 100;
                break;
            case 8:
                slot_image = LOG_ICON;
                message = "Get 100 Wood!"
                log += 100;
                break;
            case 9:     
                slot_image = IRON_ICON;
                message = "Get 10 iron!"
                iron += 10;
                break;
            case 10:
                slot_image = GOLD_ICON;
                message = "JACKPOT get 500 Gold!"
                gold += 500;
                break;
        } 
    } 
    else if(gold - 100 < 0)
    {
        message = "You need 100 Gold"
    }
}

function assemble_rocket()
{

    switch(launch_check)
    {
        case 0:
    if(rocket_engine >= 1 && set1 == 0 && set2 == 0 && set3 == 0 && log -5000 >= 0 && iron -500 >= 0)
    {
        gSound[ASSEMBLE_SOUND].play();
        message = "Assemble Rocket Engine, Next : Rocket Body"
        log -= 5000;
        iron -= 500;
        rocket_engine -= 1;
        set1 = 1;
        launch_check++;
        break;
    } 
    else if (rocket_engine == 0 && set1 == 0)
    {
        message = "You don't have Rocket Engine"
    } 
    else if(rocket_engine >= 1 && (log -5000 < 0|| iron - 500 < 0))
    {
        message = "You need 5000 Log and 500 Iron"
    }

        case 1:
    if(rocket_body >= 1 && set1 == 1 && set2 == 0 && set3 == 0 && log -5000 >= 0 && iron -500 >= 0)
    {
        gSound[ASSEMBLE_SOUND].play();
        message = "Assemble Rocket Body, Next : Rocket Head"
        rocket_body -= 1;
        set2 = 1;   
        launch_check++;
        break;
    }    
    else if (rocket_body == 0 && set1 == 1)
    {
        message = "You don't have Rocket Body"
    } 
    else if(rocket_body >= 1 && (log -5000 < 0|| iron - 500 < 0))
    {
        message = "You need 5000 Log and 500 Iron"
    }

        case 2:
    if(rocket_head >= 1 && set1 == 1 && set2 == 1 && set3 == 0 && log -5000 >= 0 && iron -500 >= 0)
    {
        gSound[ASSEMBLE_SOUND].play();
        message = "Ready to Launch"
        rocket_head -= 1;
        set3 = 1;
        launch_check++;
        break;
    }
    else if (rocket_head == 0 && set2 == 1)
    {
        message = "You don't have Rocket Head"
    } 
    else if(rocket_head >= 1 && (log -5000 < 0|| iron - 500 < 0))
    {
        message = "You need 5000 Log and 500 Iron"
    }

}

    if(launch_check == 1)
    {
        image(gImages[ROCKET_ENGINE], 600, 510);
    }
    else if(launch_check == 2)
    {
        image(gImages[ROCKET_ENGINE], 600, 510);
        image(gImages[ROCKET_BODY], 600, 510);
    }
    else if(launch_check == 3)
    {
        image(gImages[ROCKET_ENGINE], 600, 510);
        image(gImages[ROCKET_BODY], 600, 510);
        image(gImages[ROCKET_HEAD], 600, 510);
    } 
    else if(launch_check == 4)
    {

        iconX = -1000;
        iconY = -1000;
        UI_backcol = 0;
        message = "YOU WIN";
        market_button.hide();
        forest_button.hide();
        gamble_button.hide();
        lab_button.hide();
        mine_button.hide();
        bgm_slider.hide();
        gSound[ROCKET_LAUNCH].play();

    }
}