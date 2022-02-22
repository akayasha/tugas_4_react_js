import React , {Component} from "react";
import ListMakanan from "../ListData/ListMakanan"

class MenuMakanan extends Component {
  constructor(props){
    super(props);
    this.state ={
      jumlah :0,
      InputValue : "silahkan pilih pesanan anda",
      tampil : false,
      pesan : ' '
    };
    this.pilihpesanan = this.pilihpesanan.bind(this);
    this.pesanan = this.pesanan.bind(this);
    this.nasipadang = this.nasipadang.bind(this);
    this.sate = this.sate.bind(this);
    this.soto = this.soto.bind(this);
    this.uduk  = this.uduk.bind(this);
    this.kuning = this.kuning.bind(this);
    this.batal = this.batal.bind(this);

  }
  pilihpesanan(value,e ){
    this.setState({ [value] : e.target.value, tampil :true})
    console.log(e.target.value);
  }

  nasipadang(){
    this.setState({
      pesan : "Nasi Padang",
      jumlah : this.state.jumlah + 1,
      tampil :true
    });
  }

  sate(){
    this.setState({
      pesan : 'Sate',
      jumlah : this.state.jumlah +1,
      tampil :true
    })
  }

  soto(){
    this.setState({
      pesan : 'Soto',
      jumlah : this.state.jumlah +1,
      tampil :true
    })
  }

  uduk(){
    this.setState({
      pesan : 'Nasi Uduk',
      jumlah : this.state.jumlah +1,
      tampil :true
    })
  }

  kuning(){
    this.setState({
      pesan : 'Nasi Kuning',
      jumlah : this.state.jumlah +1,
      tampil :true
    })
  }

  batal(){
    Array.from(document.querySelectorAll("input")).forEach(
    input => (input.value = "")
  );
    this.setState({
      itemvalues: [{}],
      pesan : " ",
      jumlah : 0,
      tampil :false,
      pilihpesanan : [{}]
    })
  }



  pesanan(e){
    console.log(e.target.value);
    this.setState({InputValue : e.target.value});


  }
  render() {
    return(
      <div>
      <h3>Daftar Makanan Yang Kami Sediakan : </h3>
      <table>
      <tbody>
      <tr>
      <td>
        <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
        <center>
        <button onClick ={this.nasipadang}>Pesan Sekarang</button>
        </center>
      </td>
      <td>
        <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
        <center>
        <button onClick ={this.sate}>Pesan Sekarang</button>
        </center>
      </td>
      <td>
        <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
        <center>
        <button onClick ={this.soto}>Pesan Sekarang</button>
        </center>
      </td>
      <td>
        <ListMakanan gambar = "https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
        <center>
        <button onClick ={this.uduk}>Pesan Sekarang</button>
        </center>
      </td>
      <td>
        <ListMakanan gambar = "https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
        <center>
        <button onClick ={this.kuning}>Pesan Sekarang</button>
        </center>
      </td>
      </tr>
      </tbody>
      </table>
      <br/>
      <input type = "text"
            placeholder = "jumlah pesanan anda"
            onChange ={e => this.pilihpesanan("jumlah",e)} />

      <input type='number'
              placeholder ='jumlah pesanan'
              onChange = {e => this.pilihpesanan("jumlah",e)}
        />
        <button onClick ={this.batal}>Batalkan semua pesanan </button>

      {this.state.tampil === true ? (
        <div>
        <h3> pesanan anda : {this.state.pesan}</h3>
        <h4> jumlah Pesanan Anda : {this.state.jumlah} </h4>

        </div>
      ) :(
        <h1>
        <center>Anda Belum Memesan</center>
        </h1>
      )}

    </div>
    );

  }
}

export default MenuMakanan;
