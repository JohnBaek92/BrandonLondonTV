# == Schema Information
#
# Table name: links
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  link       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Link < ApplicationRecord

    has_many :images, as: :imageable, dependent: :destroy

end
