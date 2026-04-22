# Home Flow Card

Visualize energy, water, gas, heat, and other directional system flows in Home Assistant.

![Home Flow Card preview](https://github.com/user-attachments/assets/5f8df22f-99ac-4f85-879f-bb862e0933df)

## Use Cases

| Use case | What it fits |
| --- | --- |
| Energy systems | Grid, inverter, battery, PV strings, heat pump, EV charger |
| Water flows | Main supply, storage, pumps, zones, consumers |
| Gas flows | Meter, branches, appliances, storage, burners |
| Generic process flows | Any measurable system built from junctions, leaves, and directional values |

## Why this card

- Free node graph instead of a fixed template
- Junctions and leaves with editable size, color, icon, and labels
- Animated flow paths with value-based thickness
- Primary and secondary values per node
- Built-in editor for layout, anchors, labels, routing, and click actions
- Works for more than just power dashboards

## Installation

### HACS

[![Open your Home Assistant instance and open this repository in HACS.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=rosenrot00&repository=home-flow-card&category=Dashboard)

1. Open HACS
2. Add this repository as a custom repository or install it once it is available by default
3. Choose the `Dashboard` category
4. Install `Home Flow Card`

### Manual

1. Copy `home-flow-card.js` to:

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

## License

Licensed under **PolyForm Noncommercial 1.0.0**. Commercial use requires permission.
