document.querySelector('form').addEventListener('submit', function (event) {
    // Impede o envio do formulário padrão
    event.preventDefault();
    
    // Validação dos campos obrigatórios
    const titulo = document.getElementById('titulo').value;
    const preco = document.getElementById('preco').value;
    const comment = document.getElementById('comment').value;
    const modelo = document.getElementById('modelo').value;
    const kilometragem = document.getElementById('kilometragem').value;
    const compra = document.getElementById('compra').value;
    const cambio = document.querySelector('input[name="cambioModel"]:checked');
    const img = document.getElementById('img').files.length;

    if (!titulo || !preco || !comment || !modelo || !kilometragem || !compra || !cambio || img === 0) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Coleta os dados dos campos para gerar o PDF
    const opcionais = [];
    document.querySelectorAll('input[name="optionales[]"]:checked').forEach(function (checkbox) {
        opcionais.push(checkbox.value);
    });

    // Cria um PDF com os dados
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont('helvetica');
    doc.setFontSize(12);

    doc.text('Formulário de Cadastro de Veículo', 20, 20);
    doc.text(`Título do anúncio: ${titulo}`, 20, 30);
    doc.text(`Preço do anúncio: ${preco}`, 20, 40);
    doc.text(`Descrição: ${comment}`, 20, 50);
    doc.text(`Marca: ${document.getElementById('marca').value}`, 20, 60);
    doc.text(`Modelo: ${modelo}`, 20, 70);
    doc.text(`Kilometragem: ${kilometragem}`, 20, 80);
    doc.text(`Data de compra: ${compra}`, 20, 90);
    doc.text(`Tipo de câmbio: ${cambio.value}`, 20, 100);
    
    if (opcionais.length > 0) {
        doc.text('Opcionais: ', 20, 110);
        opcionais.forEach(function (opcional, index) {
            doc.text(`${index + 1}. ${opcional}`, 30, 120 + index * 10);
        });
    } else {
        doc.text('Nenhum opcional selecionado.', 20, 110);
    }

    // Gera o PDF e baixa
    doc.save('cadastro_veiculo.pdf');
});