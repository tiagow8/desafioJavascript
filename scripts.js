document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('produto-form');
    const tableBody = document.getElementById('produto-body');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const produto = {};
        formData.forEach((value, key) => {
            produto[key] = value;
        });

        adicionarProduto(produto);
        form.reset();
    });

    function adicionarProduto(produto) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${produto.nome}</td>
            <td>${parseFloat(produto.valor).toFixed(2)}</td>
        `;
        tableBody.appendChild(newRow);

        // Ordenar a tabela após adicionar um novo produto
        ordenarTabela();
    }

    function ordenarTabela() {
        const rows = Array.from(tableBody.querySelectorAll('tr'));
        const sortedRows = rows.sort((rowA, rowB) => {
            const valorA = parseFloat(rowA.querySelector('td:nth-child(2)').textContent);
            const valorB = parseFloat(rowB.querySelector('td:nth-child(2)').textContent);
            return valorA - valorB;
        });

        tableBody.innerHTML = '';
        sortedRows.forEach(row => tableBody.appendChild(row));
    }
});
