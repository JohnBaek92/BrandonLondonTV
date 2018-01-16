class CreateLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :links do |t|
      t.string :title, null: false
      t.string :link, null: false
      t.integer :page_id, null: false

      t.timestamps
    end
  end
end
