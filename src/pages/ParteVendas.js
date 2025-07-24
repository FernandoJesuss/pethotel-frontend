import React from 'react';
import '../styles/ParteVendas.css';
import { Package } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import nfTutor from '../assets/nftutor.png'; // ajuste o caminho conforme necessário

const ParteVendas = () => {
  return (
    <div className="tela-vendas">
      {/* Coluna da Imagem */}
      <div className="vendas-imagem">
        <img src={nfTutor} alt="Imagem de vendas" />
      </div>

      {/* Coluna do Formulário */}
      <div className="ponto-vendas-container">
        <div className="ponto-vendas-header">
          <div className='pv'>
            <h1>🛒 Ponto de Vendas</h1>
            <p>Gerencie suas vendas e emita notas fiscais</p>
          </div>
          <div className="header-actions">
            <Button className="salvar">💾 Salvar</Button>
            <Button className="imprimir">🖨️ Imprimir</Button>
          </div>
        </div>

        {/* Cliente */}
        <div className="section">
          <h2>👤 Cliente</h2>
          <div className="form-group">
            <Input placeholder="Nome do cliente" />
          </div>
          <div className="form-group">
            <Input placeholder="CPF/CNPJ" />
          </div>
          <div className="form-group">
            <Input placeholder="Email" />
          </div>
          <div className="form-group">
            <Input placeholder="Telefone" />
          </div>
        </div>

        {/* Adicionar Produto */}
        <div className="section">
          <div className="section-header">
            <h2>➕ Adicionar Produto</h2>
            <Button className="buscar-produto">🔍 Buscar Produto</Button>
          </div>
          <div className="form-group">
            <Input placeholder="Código" />
          </div>
          <div className="form-group">
            <Input placeholder="Descrição do produto" />
          </div>
          <div className="form-group">
            <Input placeholder="1" type="number" />
          </div>
          <div className="form-group">
            <Input placeholder="0" type="number" />
          </div>
          <Button className="btn-add-item">➕ Adicionar Item</Button>
        </div>

        {/* Itens da Venda */}
        <div className="section">
          <h2>📦 Itens da Venda</h2>
          <div className="itens-placeholder">
            <Package size={48} color="#ccc" />
            <p>Nenhum item adicionado ainda</p>
          </div>
        </div>

        {/* Nota Fiscal */}
        <div className="section">
          <h2>🧾 Nota Fiscal</h2>
          <div className="form-group">
            <Input placeholder="Número" />
          </div>
          <div className="form-group">
            <select>
              <option>NFC-e</option>
              <option>NF-e</option>
            </select>
          </div>
          <div className="form-group">
            <select>
              <option>Débito</option>
              <option>Crédito</option>
              <option>Pix</option>
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Observações" rows={3}></textarea>
          </div>
        </div>

        {/* Resumo */}
        <div className="section resumo-gs">
          <h2>📊 Resumo</h2>
          <div className="resumo-row">
            <span>Subtotal:</span>
            <span>R$ 0,00</span>
          </div>
          <div className="resumo-row">
            <span>Impostos (10%):</span>
            <span>R$ 0,00</span>
          </div>
          <hr />
          <div className="resumo-row total">
            <span>Total:</span>
            <span>R$ 0,00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParteVendas;
