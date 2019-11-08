## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :group_users
- has_many :group_users


## group_userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :massage


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :group_users
- has_many :users, through: :group_users
- has_many :messages


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|gruop_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

