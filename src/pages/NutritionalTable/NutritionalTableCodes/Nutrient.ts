export type NutrientProps = {
    type: "primary" | "secondary" | "third"
    nutrient: string
    quantity: string
    dailyValue: string
}

export function Nutrient({ type, nutrient, quantity, dailyValue }: NutrientProps) {
    return `
      <tr class="nutritional-table-row row-${type}">
        <td class="nutrient">${nutrient}</td>
        <td class="quantity">${quantity}</td>
        <td class="daily-value">${dailyValue}</td>
      </tr>
    `;
  }
