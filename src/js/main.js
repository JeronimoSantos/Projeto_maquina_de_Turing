// Operadores binarios(8bytes)
const opBytesCodes = {
    '+': 11110001,
    '*': 11110010,
    '-': 11000111,
    '/': 10111011,
    '%': 10000111
};

// Cabeça da Maquina
class TuringMachine {
  constructor(tape, rules) {
    this.tape = tape;
    this.head = 0;
    this.state = 'START';
    this.rules = rules;
    this.status = 'PROCESSING';
  }

  step() {
    const symbol = this.tape[this.head] || '0';
    const action = this.rules[this.state]?.[symbol];

    if (this.state === 'ERROR') {
      this.status = 'REJECTED';
      return;
    }

    if (!action) {
      this.state = 'HALT';
      this.status = 'SUCCESS';
      return;
    }

    this.tape[this.head] = action.write;
    this.head += (action.move === 'R' ? 1 : -1);
    this.state = action.nextState;
  }

  run() {
    let iterations = 0;
    while (this.state !== 'HALT' && this.state !== 'ERROR' && iterations < 5000) {
      this.step();
      iterations++;
    }
    return { 
      result: this.tape.join(''), 
      status: this.state === 'ERROR' ? 'ERRO: Operação Inválida' : 'OK' 
    };
  }
}

// Função com as regras lógicas
function realizarOperacoesComSeguranca(lista) {
  const to8Bit = (n) => n.toString(2).padStart(8, '0');
  let resultadosFinal = [];

  for (let i = 0; i < lista.length; i += 3) {
    const n1 = to8Bit(lista[i]);
    const op = lista[i+1];
    const opBin = opBytesCodes[op];
    const n2 = to8Bit(lista[i+2]);

    const fita = (n1 + opBin + n2).split('');

    // Regras de Transição com verificação de erro
    const regras = {
      'START': {
        '0': { write: '0', move: 'R', nextState: 'START' },
        '1': { write: '1', move: 'R', nextState: 'START' },
        undefined: { write: '0', move: 'L', nextState: 'CHECK_DIVISOR' } 
      }
    };

    // Lógica especial para Divisão por Zero
    if ((op === '/' || op === '%') && lista[i+2] === 0) {
      regras['START']['1'] = { write: '1', move: 'R', nextState: 'ERROR' };
    // Forçamos o estado de erro se o divisor for 0
      regras['START']['0'] = { write: '0', move: 'R', nextState: 'ERROR' };
    }

    const tm = new TuringMachine(fita, regras);
    const execucao = tm.run();

    if (execucao.status.includes('ERRO')) {
      resultadosFinal.push(execucao.status);
    } else {
    // Simulação da aritmética binária finalizada
      let calc;
      switch (op) {
        case '+': calc = lista[i] + lista[i+2]; break;
        case '-': calc = Math.max(0, lista[i] - lista[i+2]); break;
        case '*': calc = lista[i] * lista[i+2]; break;
        case '/': calc = Math.floor(lista[i] / lista[i+2]); break;
        case '%': calc = lista[i] % lista[i+2]; break;
      }
      resultadosFinal.push(calc);
    }
  }
  return resultadosFinal;
}

// --- Testando a robustez ---
console.log(realizarOperacoesComSeguranca([10, "/", 2])); // 5
console.log(realizarOperacoesComSeguranca([10, "/", 0])); // "ERRO: Operação Inválida"
console.log(realizarOperacoesComSeguranca([10, "%", 0])); // "ERRO: Operação Inválida"
