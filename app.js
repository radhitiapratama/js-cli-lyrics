import chalk from "chalk";

let lyrics = [
    {
        text: "Got the music in you, baby",
        delay: {
            next_text_delay: 250,
            char_delay: 95
        }
    },
    {
        text: "Tell me why",
        delay: {
            next_text_delay: 2700,
            char_delay: 100
        }
    },
    {
        text: "Got the music in you, baby",
        delay: {
            next_text_delay: 2500,
            char_delay: 95
        }
    },
    {
        text: "Tell me why",
        delay: {
            next_text_delay: 2700,
            char_delay: 100
        }
    },
    {
        text: "You've been locked in here forever",
        delay: {
            next_text_delay: 2400,
            char_delay: 70
        }
    },
    {
        text: "And you just can't say goodbye",
        delay: {
            next_text_delay: 2750,
            char_delay: 110
        }
    },
    {
        text: "Your lips, my lips",
        delay: {
            next_text_delay: 8900,
            char_delay: 110
        }
    },
    {
        text: "Apocalypse",
        textColor: true,
        delay: {
            next_text_delay: 2800,
            char_delay: 160
        }
    },
    {
        text: "Your lips, my lips",
        delay: {
            next_text_delay: 7400,
            char_delay: 110
        }
    },
    {
        text: "Apocalypse",
        textColor: true,
        delay: {
            next_text_delay: 2800,
            char_delay: 160
        }
    },
    {
        text: "",
        delay: {
            next_text_delay: 7000,
            char_delay: 1000
        }
    },
]

let total_delay = 0;

for (let i = 0; i < lyrics.length; i++) {
    total_delay += lyrics[i].delay.next_text_delay;

    setTimeout(() => {
        let chars = lyrics[i].text.split("");

        for (let j = 0; j < chars.length; j++) {
            setTimeout(() => {
                if (lyrics[i].textColor) {
                    process.stdout.write(chalk.red(chars[j]));
                } else {
                    process.stdout.write(chars[j]);
                }
            }, j * lyrics[i].delay.char_delay);
        }

        setTimeout(() => {
            console.log('');
        }, chars.length * lyrics[i].delay.char_delay);
    }, total_delay);
}
