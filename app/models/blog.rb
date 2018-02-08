class Blog < ApplicationRecord
    has_many :images, as: :imageable, dependent: :destroy
end
