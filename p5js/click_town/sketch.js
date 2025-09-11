const FOREST_BACKGROUND = 'forest_background';
const MARKET_BACKGROUND = 'market_background';
const MINE_BACKGROUND = 'mine_background';
const GOLD_ICON = 'gold_icon';
const IRON_ICON = 'iron_icon';
const LOG_ICON = 'log_icon';
const ROCKET_ENGINE_ICON = 'rocket_engine_icon';
const ROCKET_BODY_ICON = 'rocket_body_icon';
const ROCKET_HEAD_ICON = 'rocket_head_icon';
const IRON_GET = 'iron_get';
const SELL_SIGN = 'sell_sign';
const BUY_SIGN = 'buy_sign';
const SELL_BUTTON = 'sell_button';
const LAUNCHSIDE = 'launch_side';
const ROCKET_HEAD = 'rocket_head_image';
const ROCKET_BODY = 'rocket_body_image';
const ROCKET_ENGINE = 'rocket_engine_image';
const GAMBLE_ICON = 'gamble_icon'

const MAIN_BGM = 'main_bgm';
const IRON_SOUND = 'iron_sound';
const LOG_SOUND = 'log_sound';
const SELL_SOUND = 'sell_sound';
const ASSEMBLE_SOUND = 'assemble_sound';
const ROCKET_LAUNCH = 'rocket_launch';
const SLOT_SOUND = 'slot_sound'

let gImages = {};
let gSound = {};

let message;
// all check = all sell calculate
let log_all_check;
let iron_all_check;

function preload()
{
gSound[MAIN_BGM] = loadSound('media/main.wav');
gSound[LOG_SOUND] = loadSound('media/log_sound.mp3');
gSound[IRON_SOUND] = loadSound('media/iron_sound.wav');
gSound[SELL_SOUND] = loadSound('media/sell_sound.mp3');
gSound[ASSEMBLE_SOUND] = loadSound('media/assemble_sound.wav');
gSound[ROCKET_LAUNCH] = loadSound('media/rocket_launch.wav');
gSound[SLOT_SOUND] = loadSound('media/slot_sound.wav')

gImages[FOREST_BACKGROUND] = loadImage('media/forest.png');
gImages[MARKET_BACKGROUND] = loadImage('media/market.png')
gImages[GOLD_ICON] = loadImage('media/gold.png');
gImages[IRON_ICON] = loadImage('media/iron.png');
gImages[LOG_ICON] = loadImage('media/log.png');
gImages[ROCKET_BODY_ICON] = loadImage('media/rocket_body_icon.png');
gImages[ROCKET_ENGINE_ICON] = loadImage('media/rocket_engine_icon.png');
gImages[ROCKET_HEAD_ICON] = loadImage('media/rocket_head_icon.png');
gImages[SELL_SIGN] = loadImage('media/sell_sign.png');
gImages[BUY_SIGN] = loadImage('media/buy_sign.png');
gImages[SELL_BUTTON] = loadImage('media/sell_button.png');
gImages[LAUNCHSIDE] = loadImage('media/launchside.png');
gImages[MINE_BACKGROUND] = loadImage('media/mine.png');
gImages[ROCKET_HEAD] = loadImage('media/rocket_head.png');
gImages[ROCKET_BODY] = loadImage('media/rocket_body.png');
gImages[ROCKET_ENGINE] = loadImage('media/rocket_engine.png')
gImages[GAMBLE_ICON] = loadImage('media/gamble_icon.png');
}

function setup() 
{
  gSound[MAIN_BGM].loop();
  createCanvas(1500, 1000);
  background(220);
  button();
  
  sound_option();
}

function draw()
{
  
  inventory();
  bgm_loudness = bgm_slider.value();
  bgm_loudness = bgm_loudness * 1/100;
  gSound[MAIN_BGM].setVolume(bgm_loudness);
  push();
  textAlign(CENTER);
  text('Sound', 1050, 963);
  pop();
  
  world_judge();

 log_check= log;
 iron_check= iron;
 log_cal = log_check *= 0.01;
 iron_cal = iron_check *= 0.1

 vending_machine();
 alert();

 if(launch_check ==4)
 {
  gSound[MAIN_BGM].stop();
  fill('black')
  rect(0,0,1500,1000)
  image(gImages[ROCKET_ENGINE], GoX, GoY);
  image(gImages[ROCKET_BODY], GoX, GoY);
  image(gImages[ROCKET_HEAD], GoX, GoY);

  GoY-=5;
 }
 log_all_check = log - int((log_cal * 100));
 iron_all_check = iron - int((iron_cal * 10));

}

function mouseClicked() 
{
  if(world_checker == 1)
  {
    forest_farming();
  } 
  else if(world_checker == 3 )
  {
    assemble_rocket();
  }
  else if(world_checker == 4)
  {
    mine_farming();
  }
}
