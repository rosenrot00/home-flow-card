# Home Flow Card

Home Flow Card is a Home Assistant custom card for building visual flow diagrams with editable nodes and connections.

It is designed for more than classic power flow. You can use it to model electricity, water, gas, heat, or any other measurable system where values move between sources, junctions, and loads.

Instead of forcing a fixed layout, the card lets you place nodes freely, connect them visually, and define how values should be displayed and interpreted. Junctions can act as measured points, pass-through nodes, or display-only nodes. Leaves can represent producers, consumers, batteries, meters, appliances, or generic endpoints. This makes the card flexible enough for simple dashboards and for more specialized system diagrams.

The editor is built directly for Home Assistant. You can position nodes, route labels, adjust anchors, choose routing styles, configure primary and secondary values, and define click actions without leaving the card editor.

![Home Flow Card preview](https://github.com/user-attachments/assets/5f8df22f-99ac-4f85-879f-bb862e0933df)

## What the card is for

Use Home Flow Card when you want to:

- visualize how values move through a system
- show measured values directly inside nodes
- separate structure nodes from measured nodes
- model systems that are not limited to one domain
- keep the layout editable instead of relying on a fixed template

## Features

- Editable node graph directly in the Home Assistant card editor
- Junction and leaf nodes with configurable size, color, icon, and labels
- Animated flow paths with thickness based on value
- Multiple routing styles for leaves
- Primary and secondary values per node
- Click actions for primary and secondary values
- Manual node placement, label positioning, and connection anchors
- Balance logic for measured nodes and pass-through junctions
- HACS-ready package structure

## Installation

### HACS

1. Open HACS
2. Add this repository as a custom repository or install it once it is included as a default repository
3. Choose the `Dashboard` category
4. Install `Home Flow Card`
5. Add the card as a Lovelace resource if Home Assistant does not do it automatically

## Manual installation

1. Copy `dist/home-flow-card.js` to your Home Assistant instance:

   ```text
   /config/www/community/home-flow-card/home-flow-card.js
   ```

2. Add the resource:

   ```text
   /local/community/home-flow-card/home-flow-card.js
   ```

3. Use the card:

   ```yaml
   type: custom:home-flow-card
   ```

## Development

```bash
npm install
npm run dev
```

Card build:

```bash
npm run build:card
```

The build artifact used for Home Assistant and HACS is:

```text
dist/home-flow-card.js
```

## License

This project is licensed under **PolyForm Noncommercial 1.0.0**.

Noncommercial use is allowed under the license terms. Commercial use requires separate permission from the licensor.

## Publishing notes

For HACS inclusion as a default repository, the repository also needs:

- a public GitHub repository
- repository description
- GitHub topics
- issues enabled
- a passing HACS validation workflow
- at least one GitHub release created after validation passed
