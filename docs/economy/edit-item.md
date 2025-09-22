---
sidebar_label: Edit Item
sidebar_position: 6
---

import On from '@site/src/assets/toggle_on.svg';
import Off from '@site/src/assets/toggle_off.svg';
import Match from '@site/src/assets/match.svg';
import Else from '@site/src/assets/else.svg';

# Edit-Item command

`/edit item`  
*this command would allow admins to edit items in the shop.*

::::tip
You can just duplicate the [**add-item**](add-item.mdx) command and edit the blocks as this command is almost identical to the previous one.
:::note[What's Changed?]
- **Arguments** - some arguments are changed from **Required: true** to **Required: false**
- **Calculate Value Blocks**

> *everything else is same as the previous command!*
:::
::::

![Demo](../../static/flows/ModifyDemo.gif)  

## 🛠️ Arguments and Permissions
### Arguments
| Arguments | Description | Type | Values | Required |
| :---: | --- | --- | --- | :---: |
| `id` | id of the item - no special characters allowed | **Text** | Max Length : **50** | **True** <On className="inline-svg" /> |
| `name` | name of item | **Text** | Max Length : **50** | **False** <Off className="inline-svg" /> |
| `price` | price for the item | **Whole Number** |  | <Off className="inline-svg" /> |
| `description` | short description of the item | **Text** | Max Length : **150** | <Off className="inline-svg" /> |
| `reward_role` | role to give as reward | **Role** |  | <Off className="inline-svg" /> |
| `required_role` | role required to buy this item | **Role** |  | <Off className="inline-svg" /> |
| `stock` | remaining stock for the item | **Whole Number** |  | <Off className="inline-svg" /> |
| `response` | extra notes to add in response when someone buys this item | **Text** | Max Length : **150** | <Off className="inline-svg" /> |


### Command Permissions
**MANAGE GUILD** *or* **ADMIN**, *modify it according to you.*

## Get Stored Variable
- Variable : **shop**
- Set Temporary Variable : `shop`

## Calculate Value
- Temporary Variable : `shop_item`
```go title="Expression"
let list = var('shop') ?? [];

let item = findIndex(list, .id == arg('id'));

item != nil ?
    map(list, #index == item ?
            {
                "id": .id,
                "stock": arg('stock') ?? .stock,
                "name": arg('name') ?? .name,
                "role": arg('role')?.id ?? .role,
                "price": arg('price') ?? .price,
                "desc": arg('description') ?? .desc,
                "response": arg('response') ?? .response
            }
     : #)
:
    "## ⚠️ Item not in list."
```

## Comparison Condition
- Base Value : `{{type(var('shop_item'))}}`

### Match Condition <Match className="inline-svg" />
| Comparison Mode | Comparison Value |
| :---: | :---: |
| **Equal** | `array` |

1. **Set stored variable**
    - Variable : **shop**
    - Operation : **Overwrite**
    - Value : `{{var('shop_item')}}`  

2. **Create Response Message** : `done 👌`  

### Else <Else className="inline-svg" />
- **Create Response Message** : `{{var('shop_item')}}`