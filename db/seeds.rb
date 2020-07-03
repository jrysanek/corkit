# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Room.destory_all
Board.destory_all
User.destroy_all

@user1 = User.create!({ email: 'jess@jess22.com', password: '123456' })

p "#{User.count} user(s) created"
@board = Board.create!({ user: @user1 })

@room = Room.create!({ user: @user1, board: @board, name: 'Bedroom', notes: 'This is gonna look cool!', to_do_list: 'paint room', shopping_list: 'purple paint, baskets, brushes, photos', image_url: 'https://i.imgur.com/jfFH7Iv.png', swatches_url: 'https://i.imgur.com/pmZe0Ry.jpeg'  })

