-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR NOT NULL,
    author VARCHAR NOT NULL,
    year_published INT NOT NULL,
    first_paragraph VARCHAR NOT NULL,
    publisher VARCHAR NOT NULL
);

INSERT INTO books (title, author, year_published, first_paragraph, publisher)
VALUES
('Mistborn: The Final Empire', 'Brandon Sanderson', 2006, 'Ash fell from the sky. Vin watched the downy flakes drift through the air. Leisurely. Careless. Free. The puffs of soot fell like black snowflakes, descending upon the dark city of Luthadel. They drifted in corners, blowing in the breeze and curling in tiny whirlwinds over the cobblestones. They seemed so uncaring. What would that be like?', 'Tor Books'),
('Mistborn: The Well of Ascension', 'Brandon Sanderson', 2007, 'The army crept like a dark stain across the horizon. King Elend Venture stood motionless upon the Luthadel city wall, looking out at the enemy troops. Around him, ash fell from the sky in fat, lazy flakes. It wasnt the burnt white ash that one saw in dead coals; this was a deeper, harsher black ash. The Ashmounts had been particularly active lately.', 'Tor Books'),
('Mistborn: The Hero of Ages', 'Brandon Sanderson', 2008, 'Fatren squinted up at the red sun, which hid behind its perpetual screen of dark haze. Black ash fell lightly from the sky, as it did most days lately. The thick flakes fell straight, the air stagnant and hot, without even a hint of a breeze to lighten Fatrens mood. He sighed, leaning back against the earthen bulwark, looking over Vetitan. His town.', 'Tor Books'),
('The Fellowship of the Ring', 'J.R.R. Tolkien', 1954, 'When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.', 'Houghton Mifflin'),
('The Two Towers', 'J.R.R. Tolkien', 1954, 'Aragorn sped on up the hill. Every now and again he bent to the ground. Hobbits go light, and their footprints are not easy even for a Ranger to read, but not far from the top a spring crossed the path, and in the wet earth he saw what he was seeking.', 'Houghton Mifflin'),
('The Return of the King', 'J.R.R. Tolkien', 1955, 'Pippin looked out from the shelter of Gandalfs cloak. He wondered if he was awake or still sleeping, still in the swift-moving dream in which he had been wrapped so long since the great ride began. The dark world was rushing by and the wind sang loudly in his ears. He could see nothing but the wheeling stars, and away to his right vast shadows against the sky where the mountains of the South marched past. Sleepily he tried to reckon the times and stages of their journey, but his memory was drowsy and uncertain.', 'Houghton Mifflin');


DROP TABLE IF EXISTS alchemy_assignments;

CREATE TABLE alchemy_assignments (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    module INT NOT NULL,
    description VARCHAR NOT NULL
);

INSERT INTO alchemy_assignments (name, module, description) 

VALUES
('Magic 8 Ball', 1, 'An assignment from Alchemy Code Labs to build a Magic 8 ball using HTML, CSS, and Javascript'),
('Goblin Fighter', 1, 'An assignment from Alchemy Code Labs to build a Goblin Fighter Game using HTML, CSS, and Javascript'),
('Pokemon Compendium', 2, 'An assignment from Alchemy Code Labs to build a Pokemon Compendium using third party APIS and React'),
('Tic Tac Toe', 2, 'An Assignment from Alchemy Code Labs to build a Tic Tac Toe Game using React and Context to pass game state'),
('Zodiac API', 3, 'An Assignment from Alchemy Code Labs to build an API of Zodiac signs');