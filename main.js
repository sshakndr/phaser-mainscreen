class HTMLImageLoader extends Phaser.Loader.File {
    constructor(loader, fileConfig) {
        super(loader, Object.assign(fileConfig, { type: 'image' }));
    }

    load() {
        this.src = new Image();
        
        this.src.onload = () => {
            this.loader.scene.textures.addImage(this.key, this.src);
            this.loader.nextFile(this, true);
        };

        this.src.onerror = () => {
            this.loader.nextFile(this, false);
        };

        this.src.src = this.url;
    }
}

const SCENE_WIDTH = 1440;
const SCENE_HEIGHT = 810;
const TEXT_STYLE_MAIN = {
    fontSize: '22px',
    fill: '#fff',
    fontFamily: 'Arial Black',
    stroke: '#000',
    strokeThickness: 2,
}
const TEXT_STYLE_MINI_LABEL = {
    fontSize: '16px',
    fontStyle: 'bold',
    fill: '#424156',
    fontFamily: 'Arial',
}

class MainScene extends Phaser.Scene {

    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'attentionIcon',
            url: 'sprites/attention.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'bankButton',
            url: 'sprites/bankButton.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'collectionsButton',
            url: 'sprites/button_collections.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'playButton',
            url: 'sprites/playButtonEmpty.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'playArrow',
            url: 'sprites/playButtonArrow.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'lockIcon',
            url: 'sprites/Event_comingSoon.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'miniLabel',
            url: 'sprites/mini-label.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'strangeIcon',
            url: 'sprites/strange_icon.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'tasksButton',
            url: 'sprites/tasks.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'chatButton',
            url: 'sprites/button_chat.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'eventsButton',
            url: 'sprites/Mini_events.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'starIcon',
            url: 'sprites/Stars.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'starLabel',
            url: 'sprites/star-label.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'options',
            url: 'sprites/options.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'hintIcon',
            url: 'sprites/redHint.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'banner',
            url: 'sprites/mainOffer_1.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'bannerTimer',
            url: 'sprites/mainOfferTimer.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'bannerStamp',
            url: 'sprites/bonus_stamp_100.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'label',
            url: 'sprites/label.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'plusButton',
            url: 'sprites/plusButton.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'energyIcon',
            url: 'sprites/Energy.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'diamondsIcon',
            url: 'sprites/Diamonds.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'coinsIcon',
            url: 'sprites/Coins.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'subLabel',
            url: 'sprites/sublabel.png'
        }));
        this.load.addFile(new HTMLImageLoader(this.load, {
            key: 'boostIcon',
            url: 'sprites/boost-icon.png'
        }));
    }

    create() {
        const bankButton = this.add.image(0, 0, 'bankButton').setOrigin(0, 0).setDisplaySize(225, 270);
        const bankAttention = this.add.image(140, 90, 'attentionIcon').setOrigin(0.5, 0.5);
        const bankText = this.add.text(112.5, 230, 'Bank', TEXT_STYLE_MAIN).setOrigin(0.5, 0.5);
        const buttonContainer = this.add.container(0, 540, [bankButton, bankText, bankAttention]);

        const collectionsButton = this.add.image(0, 0, 'collectionsButton').setOrigin(0, 0).setDisplaySize(130, 140);
        const collectionsAttention = this.add.image(115, 35, 'attentionIcon').setOrigin(0.5, 0.5);
        const collectionsText = this.add.text(65, 130, 'Collections', TEXT_STYLE_MAIN).setOrigin(0.5, 0.5);
        const collectionsContainer = this.add.container(270, 650, [collectionsButton, collectionsText, collectionsAttention]);

        const playButton = this.add.image(0, 0, 'playButton').setOrigin(1, 1).setDisplaySize(220, 220);
        const playArrow = this.add.image(-110, -110, 'playArrow').setOrigin(0.5, 0.5);
        const playText = this.add.text(-110, -40, 'Play', TEXT_STYLE_MAIN).setOrigin(0.5, 0.5);
        const playContainer = this.add.container(SCENE_WIDTH, SCENE_HEIGHT, [playButton, playArrow, playText]);

        const lockIcon = this.add.image(0, 0, 'lockIcon').setOrigin(0.5, 0.5).setDisplaySize(90, 90);
        const lockAttention = this.add.image(40, -20, 'attentionIcon').setOrigin(0.5, 0.5);
        const lockText = this.add.text(0, 35, 'Sellout', TEXT_STYLE_MAIN).setOrigin(0.5, 0.5);
        const lockLabel = this.add.image(0, 0, 'miniLabel').setOrigin(0.5, 0.5);
        const lockLabelText = this.add.text(0, 0, '4d 3h', TEXT_STYLE_MINI_LABEL).setOrigin(0.5, 0.5);
        const lockLabelContainer = this.add.container(0, 60, [lockLabel, lockLabelText]);
        const lockContainer = this.add.container(1200, 730, [lockIcon, lockAttention, lockText, lockLabelContainer]);

        const strangeIcon = this.add.image(0, 0, 'strangeIcon').setOrigin(0.5, 0.5);
        const strangeIconLabel = this.add.image(0, 0, 'miniLabel').setOrigin(0.5, 0.5);
        const strangeIconLabelText = this.add.text(0, 0, '2d 20h', TEXT_STYLE_MINI_LABEL).setOrigin(0.5, 0.5);
        const strangeIconLabelContainer = this.add.container(0, 40, [strangeIconLabel, strangeIconLabelText]);
        const strangeContainer = this.add.container(70, 50, [strangeIcon, strangeIconLabelContainer]);

        const tasksButton = this.add.image(0, 0, 'tasksButton').setOrigin(0, 0).setDisplaySize(115, 115);
        const tasksAttention = this.add.image(100, 40, 'attentionIcon').setOrigin(0.5, 0.5);
        const tasksText = this.add.text(57.5, 100, 'Tasks', TEXT_STYLE_MAIN).setOrigin(0.5, 0.5);
        const tasksContainer = this.add.container(10, 120, [tasksButton, tasksText, tasksAttention]);

        const chatButton = this.add.image(0, 0, 'chatButton').setOrigin(0, 0).setDisplaySize(115, 115);
        const chatAttention = this.add.image(100, 40, 'attentionIcon').setOrigin(0.5, 0.5);
        const chatText = this.add.text(57.5, 100, 'Chat', TEXT_STYLE_MAIN).setOrigin(0.5, 0.5);
        const chatContainer = this.add.container(10, 240, [chatButton, chatText, chatAttention]);

        const eventsButton = this.add.image(0, 0, 'eventsButton').setOrigin(0, 0).setDisplaySize(115, 115);
        const eventsText = this.add.text(57.5, 100, 'Mini-Events', {...TEXT_STYLE_MAIN, fontSize: '16px'}).setOrigin(0.5, 0.5);
        const eventsContainer = this.add.container(10, 370, [eventsButton, eventsText]);

        const starLabel = this.add.image(0, 0, 'starLabel').setOrigin(0, 0);
        const starIcon = this.add.image(0, 18, 'starIcon').setOrigin(0.5, 0.5).setDisplaySize(60, 60);
        const starCount = this.add.text(45, 17, '0', TEXT_STYLE_MINI_LABEL).setOrigin(0.5, 0.5);
        const starContainer = this.add.container(200, 30, [starLabel, starIcon, starCount]);

        const optionsButton = this.add.image(0, 0, 'options').setOrigin(0.5, 0.5).setDisplaySize(60, 60);
        const optionsHint = this.add.image(25, -20, 'hintIcon').setOrigin(0.5, 0.5).setDisplaySize(32, 32);
        const optionsContainer = this.add.container(1390, 50, [optionsButton, optionsHint]);

        const banner = this.add.image(0, 0, 'banner').setOrigin(1, 0).setDisplaySize(165, 125);
        const bannerStamp = this.add.image(-25, 25, 'bannerStamp').setOrigin(0.5, 0.5);
        const bannerTimer = this.add.image(0, 0, 'bannerTimer').setOrigin(0.5, 0.5).setDisplaySize(120, 20);
        const bannerTimerText = this.add.text(0, 0, '10h 2m', {...TEXT_STYLE_MINI_LABEL, fontSize: '14px', fill: "#fef68b"}).setOrigin(0.5, 0.5);
        const bannerTimerContainer = this.add.container(-60, 115, [bannerTimer, bannerTimerText]);
        const bannerContainer = this.add.container(SCENE_WIDTH, 100, [banner, bannerStamp, bannerTimerContainer]);
        
        const energyLabel = this.add.image(0, 0, 'label').setOrigin(0.5, 1);
        const energyPlusButton = this.add.image(50, 1, 'plusButton').setOrigin(0, 1).setDisplaySize(34, 34);
        const energyIcon = this.add.image(-62, -18, 'energyIcon').setOrigin(0.5, 0.5).setDisplaySize(64, 64);
        const energuCount = this.add.text(0, -15, '10000', {...TEXT_STYLE_MINI_LABEL, fontSize: '18px'}).setOrigin(0.5, 0.5);
        const energyContainer = this.add.container(1250, 65, [energyLabel, energyPlusButton, energyIcon, energuCount]);

        const diamondsLabel = this.add.image(0, 0, 'label').setOrigin(0.5, 1);
        const diamondsPlusButton = this.add.image(50, 1, 'plusButton').setOrigin(0, 1).setDisplaySize(34, 34);
        const diamondsIcon = this.add.image(-62, -18, 'diamondsIcon').setOrigin(0.5, 0.5).setDisplaySize(120, 120);
        const diamondsCount = this.add.text(0, -15, '10000', {...TEXT_STYLE_MINI_LABEL, fontSize: '18px'}).setOrigin(0.5, 0.5);
        const diamondsContainer = this.add.container(1075, 65, [diamondsLabel, diamondsPlusButton, diamondsIcon, diamondsCount]);

        const coinsLabel = this.add.image(0, 0, 'label').setOrigin(0.5, 1);
        const coinsPlusButton = this.add.image(50, 1, 'plusButton').setOrigin(0, 1).setDisplaySize(34, 34);
        const coinsIcon = this.add.image(-62, -18, 'coinsIcon').setOrigin(0.5, 0.5).setDisplaySize(52, 52);
        const coinsCount = this.add.text(0, -15, '10000', {...TEXT_STYLE_MINI_LABEL, fontSize: '18px'}).setOrigin(0.5, 0.5);
        const coinsSubLabel = this.add.image(0, 0, 'subLabel').setOrigin(0.5, 0);
        const coinsBoostIcon = this.add.image(-40, 10, 'boostIcon').setOrigin(0.5, 0.5);
        const coinsSubLabelText = this.add.text(0, 10, '01:57', {...TEXT_STYLE_MINI_LABEL, fill: '#2d4f96'}).setOrigin(0.5, 0.5);
        const coinsBoostContainer = this.add.container(0, 0, [coinsSubLabel, coinsBoostIcon, coinsSubLabelText])
        const coinsContainer = this.add.container(890, 65, [coinsLabel, coinsPlusButton, coinsIcon, coinsCount, coinsBoostContainer]);
    }
}

const config = {
    type: Phaser.CANVAS,
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
    parent: 'game-container',
    scene: MainScene,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
};

const game = new Phaser.Game(config);