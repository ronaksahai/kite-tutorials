---
sidebar_position: 1
---

# modify points command
*this command would allow admins to modify points of users.*

## 🛠️ Step 1 : Arguments and Permissions
### Arguments
1. **`points`**
    - Description : number of points to add/remove
    - Type : **Whole Number**
    - Argument Required : **True**
    - Minimum Value : **1**
    - Maximum Value : *your choice ( I've put 100000 in my example )*

2. **`user`**
    - Description : user whose points need to be modified
    - Type : **User**
    - Argument Required : **True**

3. **`operation`**
    - Description : add or remove
    - Type : **Text**
    - Argument Required : **True**
    - **Choices** :
     - **Add** : `add`
     - **Remove** : `remove`

### Command Permissions
**MANAGE GUILD** *or any modify it according to you.*

## 📝 Step 2 : Get Stored Variable
- Variable : **economy**
- Set Temporary Variable : `users`

## ⚖️ Step 3 : Comparison Condition
- Base Value : `{{arg('operation')}}`
- **Match Condition**
  - Comparison Mode : **Equal**
  - Comparison Value : `add`

## `🟢` ***match condition***
### 1. 🧮 Calculate Value Block
**Expression** :
-# Copy-paste this, **DO NOT CHANGE** anything that you don't understand.
```go
let list = var('users') ?? [];
let target_user = arg('user').id;
let points = arg('points');

any(list, .id == target_user) ?
    map(list, .id == target_user ? {"id": .id, "points": .points + points} : #) :
    concat(list, [{"id": target_user, "points": points}])
```

### 2. Set Stored Variable
- Variable : **economy**
- Operation : **Overwrite**
- Value : `{{result('CALCULATE_VALUE')}}`
-# Replace **CALCULATE_VALUE** with your respective block's name.

### 3. Create Response Message
-# *copy or edit this, and put it into your response message.*
```md
Added **{{arg('points')}}** to **{{arg('user').username}}**
```

## `🔴` ***else***
### 1. 🧮 Calculate Value Block
- **Expression** :
Copy-paste this, **DO NOT CHANGE** anything that you don't understand.
```go
let list = var('users') ?? [];
let target_user = arg('user').id;
let points = arg('points');

let modify = find(list, .id == target_user);

points <= (modify?.points ?? 0) ?
    map(list, .id == target_user ? {"id": .id, "points": .points - points} : #) :
    "error"
```
- Set Temporary Variable : `modify`

### 2. Comparison Condition
- Base Value : `{{type(var('modify'))}}`
replace **CALCULATE_VALUE** with your respective block's name.
- **Match Condition**
  - Comparison Mode : **Equal**
  - Comparison Value : `array`

`🔴🟢` ***After the match condition ( of this step ) :***
#### 1. Set Stored Variable 📝
- Variable : **economy**
- Operation : **Overwrite**
- Value : `{{var('modify')}}`

#### 2. Create Response Message
> *copy or edit this, and put it into your response message.*
```md
Removed **{{arg('points')}}** from **{{arg('user').username}}**
```

`🔴🔴` ***After the else condition ( of this step ) :***
#### Create Response Message
> *copy or edit this, and put it into your response message.*
```md
# ⚠️ Error
*either the user doesn't have any points or you're trying to remove more points than what the user already has.*
```