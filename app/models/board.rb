class Board < ApplicationRecord
  belongs_to :user
  has_many :rooms
end
