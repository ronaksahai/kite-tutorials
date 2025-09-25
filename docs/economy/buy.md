---
sidebar_label: Buy
sidebar_position: 8
---

import Details from '@theme/Details';
import On from '@site/src/assets/toggle_on.svg';

# Buy command

*this command would allow items from the shop.*
- `/buy`

![Shop Example](../../static/flows/eco/shop.png)  

## Arguments
**`id`**
- Description : id of item you want to buy
- Type : **Text**
- Argument Required : **True** <On className="inline-svg"/>

## Get Stored Variable - 1
- Variable : **shop**
- Set Temporary Variable : `shop`

> You would need another **Get Stored Variable** block for this command.

## Get Stored Variable - 2
- Variable : **economy**
- Set Temporary Variable : `users`

## Calculate Value
- Temporary Variable : `item`
```go title="Expression"
let list = var('shop') ?? [];
let currency = "🪙";
let item = find(list, .id == arg('id'));

let balance = find(var('users'), .id == user.id)?.points ?? 0;

item != nil && !( item.role in user.role_ids ) && ( item.require in user.role_ids || item.require == nil ) && ( item.stock == nil || item.stock > 0 ) && balance >= item.price ?
	item
    :
    [
		"# ⚠️ Error",
		"*Make sure the item exists, you have the required role, it's in stock, and you have enough points*",
		"-# *and you cannot buy a role that you already have.*",
		"- **Your Balance :** " + toJSON(balance) + " " + currency,
		"- **Item Price :** " + (item != nil ? toJSON(item.price) + " " + currency : "N/A"),
		"- **Item Stock :** " + (item != nil ? (item.stock != nil ? toJSON(item.stock) : "Unlimited") : "N/A"),
		"- **Required Role :** " + (item != nil ? (item.require != nil ? "<@&" + item.require + ">" : "None") : "N/A"),
	]
```

# Comparison Condition
- Base Value : `{{type(var('item'))}}`

## Match Condition
---

| Comparison Mode | Comparison Value |
| :---: | :---: |
| Equal | `array` |

### Handle Errors Block
 - Add **Create Response Message** block after the "Handle Errors" option.
 ```text title="Create Response Message"
 # ⚠️ Error
- The bot doesn't have appropriate permissions, *or*
- Bot's highest role isn't ranked higher than the reward role, *or*
- The reward role has been deleted / doesn't exist anymore.
```

### Try Blocks

<Details summary="Click here to learn more about this feature">

This is the hidden content that will be revealed when you click.
You can have multiple paragraphs, lists, and other content in here.

</Details>

## Advanced Configuration

## Advanced Configuration

<Details summary="View advanced settings and examples">

This is the content that will be hidden until the user clicks.

You can put anything you want in here, including:
- Bulleted lists
- Code blocks
- Admonitions

```js title="Example Code"
const advancedSetting = true;
```
</Details>


<Details summary="Show me an important tip">

:::tip Important Tip

This entire admonition block is inside the dropdown.
It's a great way to hide long explanations or code samples that aren't critical for every reader to see immediately.

:::

</Details>

```md
import Details from '@theme/Details';

<Details summary="Show me an important tip">

:::tip Important Tip

This entire admonition block is inside the dropdown.
It's a great way to hide long explanations or code samples that aren't critical for every reader to see immediately.

:::

</Details>

```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Heading from '@theme/Heading';



This heading is outside the tabs, so it will correctly appear in the "On this page" sidebar.

<Tabs>
  <TabItem value="apple" label="Apple" attributes={{className: "redtab"}} default>
    <Heading as="h3">Gala Apples</Heading>
    This heading is inside a tab and uses the `<Heading>` component, so it **will not** appear in the sidebar. This is the correct way to do it.

    Gala apples are sweet and mild.
  </TabItem>
  <TabItem value="orange" label="Orange">

    Navel oranges are easy to peel.
  </TabItem>
</Tabs>