---
sidebar_label: Leaderboard
sidebar_position: 3
---

# Leaderboard command

*this command shows the users with the most balance, from top to bottom*  

**NOTE :** The leaderboard only shows ranking based on the "current" wallet of the user and *doesn't count the balance which users might have used to purchase items from shop*.

## 🛠️ Arguments
- **`page`**
    - Description : leaderboard's page number
    - Type : **Whole Number**
    - Argument Required : **False** (this argument should be set as optional)
    - Minimum Value : **1**

## Get Stored Variable
- Variable : **economy**
- Set Temporary Variable : `users`

## Calculate Value - A
- Temporary Variable : `leaderboard`
```go title="Expression, Temporary Variable = leaderboard"
let currency = "🪙";
let page = arg('page') != nil ? (arg('page') - 1)*10 : 0;
map(
  sortBy(
      var('users') ?? [],
          .points,
          "desc"
      )[page:page+10],
      { '- `' + (page == 0 ? (#index == 0 ? "🥇" : (#index == 1 ? "🥈" : (#index == 2 ? "🥉" : "#" + string(#index + 1)))) : "#" + string(page + #index + 1)) + "` <@" + .id + '> - `' + string(.points) + '` ' + currency })
```

## Calculate Value - B
- Temporary Variable : `user`
```go title="Expression, Temporary Variable = user"
let list = var('users') ?? [];
let currency = "🪙";
let target = arg('user')?.id ?? user.id;

let user_data = find(list, .id == target);

user_data != nil ?
    let sorted_list = sortBy(list, .points, "desc");
    let rank = findIndex(sorted_list, .id == target);
        "💬 You are ranked `#" + string(rank + 1) + "` with a total of `" + string(user_data.points) + "` " + currency
:
"💬 You're not on the leaderboard yet."
```

## Create Response Message
- Add an embed
- Build embed as follows :

```go title="Embed Description"
{{join(var('leaderboard'), '\n')}}
```
```go title="Embed Footer"
Page {{arg('page') ?? 1}} / {{var('users') ?? "0" | len()/10 | ceil()}}
```
- Additionally add a `Field` in the embed with the name **Your Rank** and put this in field value :
```go title="Field Value"
{{var('user')}}
```

:::tip
*You can edit other parts of the embed such as image, color, etc. as you wish!*
:::