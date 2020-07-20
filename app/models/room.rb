class Room < ApplicationRecord
  belongs_to :user
  belongs_to :board

  has_many :to_dos, dependent: :destroy
end
