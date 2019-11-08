## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|
|mail|string|null: false|

### Association
- has_many :message
- has_many :user, through: :group
- has_many :group_user


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
|group|_nameinteger|null: false, foreign_key: true|

### Association
- has_many :group_user
- has_many :group, through: :user
- has_many :message


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|gruop_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

