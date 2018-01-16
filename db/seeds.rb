# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



post = Post.create({title: "My First Post", body: "Its all about the Pikachus"})

Image.create({imageable_type: "Post", imageable_id: post.id, image: "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season20/season20_ep28_ss01.jpg"})
Image.create({imageable_type: "Post", imageable_id: post.id, image: "http://digimon-adventure.net/images/character/gabumon.png"})
