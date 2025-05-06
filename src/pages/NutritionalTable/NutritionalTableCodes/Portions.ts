type PortionsProps = {
    capsules: string
    milligrams: string
}

export function Portions({capsules, milligrams}: PortionsProps) {
    return `
        <div class="container-nutritional-table">
            <div class="container-title">
                <h5 class="title-nutritional-information">Informação Nutricional</h5>
                <p class="subtitle-nutritional-information">Informações obtidas pelo fabricante e podem ser conferidas no rótulo do produto.</p>
            </div>
            <div class="container-portions">
                <span>Porção de ${capsules}</span>
                <span>${milligrams}</span>
            </div>
            <table class="nutritional-table">
                <thead>
                    <tr class="nutritional-table-title">
                        <th class="nutrient">Nutriente</th>
                        <th class="quantity">Quantidade</th>
                        <th class="daily-value">% valor diário</th>
                    </tr>
                </thead>
                <tbody>`
}
