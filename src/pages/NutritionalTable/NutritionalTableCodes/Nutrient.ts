export type NutrientProps = {
  type: "primary" | "secondary" | "third"
  nutrient: ItemProps
  quantity: ItemProps
  dailyValue: ItemProps
}

interface ItemProps {
  name: string
  onChange?: (value: string) => void
}

export function Nutrient({ type, nutrient, quantity, dailyValue }: NutrientProps) {
  return `
      <tr class="nutritional-table-row row-${type}">
        <td class="nutrient">${nutrient.name}</td>
        <td class="quantity">${quantity.name}</td>
        <td class="daily-value">${dailyValue.name}</td>
      </tr>
    `;
}
