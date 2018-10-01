class CreatePortraits < ActiveRecord::Migration[5.2]
  def change
    create_table :portraits do |t|
      t.string :image
      t.timestamps
    end
  end
end
