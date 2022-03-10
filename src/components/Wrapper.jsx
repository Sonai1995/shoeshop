import React, {useState, useEffect} from 'react'
import Products from './Products'

const allCategories = [

    {
      "_id": 1,
      "name": "Flip Flops"
    },
    {
      "_id": 2,
      "name": "Sneakers"
    },
    {
      "_id": 3,
      "name": "Lace-up Shoes"
    },
    {
      "_id": 4,
      "name": "Shoes Accesories"
    }
]

const Wrapper = (props) => {

    const [data, setData] = useState(props.records);         //all shoes data
    const [filterdata, setFilterData] = useState([]);        //all filtered data
    const [search, setSearch] = useState([]);                //searchbar handler
    const [category, setCategory] = useState([]);            //category filter    
    const [inputmin, setInputmin] = useState(0);             //price range min
    const [inputmax, setInputmax] = useState(10000);         //price range max
    const [sizedata, setSizedata] = useState([]);            //size filter      


    const [btnb36, setBtnb36] = useState('buttonoff');
    const [btnb37, setBtnb37] = useState('buttonoff');
    const [btnb38, setBtnb38] = useState('buttonoff');
    const [btnb39, setBtnb39] = useState('buttonoff');
    const [btnb40, setBtnb40] = useState('buttonoff');
    const [btnb41, setBtnb41] = useState('buttonoff');
    const [btnb42, setBtnb42] = useState('buttonoff');
    const [btnb43, setBtnb43] = useState('buttonoff');
    const [btnb44, setBtnb44] = useState('buttonoff');
    const [btnb45, setBtnb45] = useState('buttonoff');
    const [btnb46, setBtnb46] = useState('buttonoff');
    const [btnb47, setBtnb47] = useState('buttonoff');
    const [btnb48, setBtnb48] = useState('buttonoff');
    const [btnb49, setBtnb49] = useState('buttonoff');
    const [btnb50, setBtnb50] = useState('buttonoff');
    
    useEffect(()=>{
        setData(props.records);
    }, [])

    useEffect(() => {

        console.log(filterdata);
        setData(filterdata);

    }, [filterdata]);

    useEffect(() => {

        //while removing size filter
        filters();

    }, [sizedata]);

    function searchfn(shoes) {
        return shoes.filter((dd) => dd.title.toLowerCase().indexOf(search) > -1);
    }  

    function filters() {

        //category
        let tempdata1;
        let catObject = [];
        if(category.length > 0)
        {
        category.forEach(ccc => {         
            tempdata1 = props.records.filter((dd) => dd.category.indexOf(ccc) > -1);
            catObject.push(tempdata1);
        });
        }
        else tempdata1 = props.records;
        
        if(catObject.length > 0)
        {
            let objArray = [];
            catObject.forEach(row => {
                
                if(row.length === undefined) objArray.push(row);
                return Array.prototype.push.apply(objArray,row);  
            })  
            tempdata1 = objArray;      
        }

        //price
        let tempdata2 = tempdata1.filter((ddd) => {
            if(ddd.price >= inputmin && ddd.price <= inputmax) return ddd;
        });
        console.log(tempdata2);
        
        //size
        if(sizedata.length > 0)
        {
            let tempdata3 = [];
            tempdata2.filter((ddd) => {
                sizedata.forEach(ccc => {                    
                    if(ddd.size == ccc) tempdata3.push(ddd);                
                })                    
            });
            //console.log(tempdata3);
            setFilterData(tempdata3); 
        }
        else setFilterData(tempdata2);
    }

    const chkClick = (e) => {
    
        if(e.target.checked) 
        {
            //add to category filter
            category.push(e.target.name);   
        }                
        else 
        {
            if (category.indexOf(e.target.name) > -1) {
                category.splice(category.indexOf(e.target.name), 1); 
            }                               
        } 
        //console.log(category);  
        filters();
    }    

    const priceChange = (e) => {

        if(e.target.id === 'mmm') setInputmin(parseInt(e.target.value));
        if(e.target.id === 'mxx') setInputmax(parseInt(e.target.value));   
        filters();     
    }

    const setSizefn = (e) => {

        if(e.target.id === 'b36') {if(e.target.className === 'buttonoff') setBtnb36('buttonon'); else setBtnb36('buttonoff');}
        if(e.target.id === 'b37') {if(e.target.className === 'buttonoff') setBtnb37('buttonon'); else setBtnb37('buttonoff');}
        if(e.target.id === 'b38') {if(e.target.className === 'buttonoff') setBtnb38('buttonon'); else setBtnb38('buttonoff');}
        if(e.target.id === 'b39') {if(e.target.className === 'buttonoff') setBtnb39('buttonon'); else setBtnb39('buttonoff');}
        if(e.target.id === 'b40') {if(e.target.className === 'buttonoff') setBtnb40('buttonon'); else setBtnb40('buttonoff');}
        if(e.target.id === 'b41') {if(e.target.className === 'buttonoff') setBtnb41('buttonon'); else setBtnb41('buttonoff');}
        if(e.target.id === 'b42') {if(e.target.className === 'buttonoff') setBtnb42('buttonon'); else setBtnb42('buttonoff');}
        if(e.target.id === 'b43') {if(e.target.className === 'buttonoff') setBtnb43('buttonon'); else setBtnb43('buttonoff');}
        if(e.target.id === 'b44') {if(e.target.className === 'buttonoff') setBtnb44('buttonon'); else setBtnb44('buttonoff');}
        if(e.target.id === 'b45') {if(e.target.className === 'buttonoff') setBtnb45('buttonon'); else setBtnb45('buttonoff');}
        if(e.target.id === 'b46') {if(e.target.className === 'buttonoff') setBtnb46('buttonon'); else setBtnb46('buttonoff');}
        if(e.target.id === 'b47') {if(e.target.className === 'buttonoff') setBtnb47('buttonon'); else setBtnb47('buttonoff');}
        if(e.target.id === 'b48') {if(e.target.className === 'buttonoff') setBtnb48('buttonon'); else setBtnb48('buttonoff');}
        if(e.target.id === 'b49') {if(e.target.className === 'buttonoff') setBtnb49('buttonon'); else setBtnb49('buttonoff');}
        if(e.target.id === 'b50') {if(e.target.className === 'buttonoff') setBtnb50('buttonon'); else setBtnb50('buttonoff');}

        if(e.target.className === 'buttonoff')
        {
            sizedata.push(parseInt(e.target.value));
        }
        if(e.target.className === 'buttonon')
        {
            let temparray5 = [];
            sizedata.forEach(cc => {
                if(cc !== parseInt(e.target.value)) temparray5.push(cc);                     
            })
            setSizedata([...temparray5]);             
        }
        //use useEffect to add action here on remove size..

        filters();
    }

  return (
      
    <React.Fragment>
        <div style={{width:"100%"}}>
            <h3 style={{width:"20%", float:"left", marginLeft:'20%', color:'chartreuse'}}>Search for Product Name :</h3>
            <input type="text" className="searchbar" style={{width:"40%", float:"left"}} onChange={(e)=>setSearch(e.target.value)} value={search} />
        </div>
        <div className="wrapper_main">
                
            <div className="filter__main">
                <div className='filter__items'>
                    <h1>Categories</h1>
                    {allCategories.map((value,index)=> (
                        <React.Fragment key={index}>
                            <label className="container">{value.name}
                            <input type="checkbox" name={value.name} onChange={chkClick} />
                            <span className="mark"></span>
                            </label>
                        </React.Fragment>
                    ))}                                   
                </div>

                <div className='filter__items'>
                    <header><h2>Price Range</h2></header>
                    <div className="price-input">
                        <div className="field">
                        <input type="number" id="mmm" className="input-min" value={inputmin} onChange={(e)=>setInputmin(e.target.value)} />
                        </div>
                        <div className="separator">-</div>
                        <div className="field">
                        <input type="number" id="mxx" className="input-max" value={inputmax} onChange={(e)=>setInputmax(e.target.value)} />
                        </div>
                    </div>
                    <input type="button" className='setPricebtn' value="Set Price" onClick={priceChange} />
                </div>

                <div className='filter__items'>
                    <h2>Size</h2>
                    <button className={btnb36} id="b36" onClick={setSizefn} value="36">36</button>
                    <button className={btnb37} id="b37" onClick={setSizefn} value="37">37</button>
                    <button className={btnb38} id="b38" onClick={setSizefn} value="38">38</button>
                    <button className={btnb39} id="b39" onClick={setSizefn} value="39">39</button>
                    <button className={btnb40} id="b40" onClick={setSizefn} value="40">40</button>
                    <button className={btnb41} id="b41" onClick={setSizefn} value="41">41</button>
                    <button className={btnb42} id="b42" onClick={setSizefn} value="42">42</button>
                    <button className={btnb43} id="b43" onClick={setSizefn} value="43">43</button>
                    <button className={btnb44} id="b44" onClick={setSizefn} value="44">44</button>
                    <button className={btnb45} id="b45" onClick={setSizefn} value="45">45</button>
                    <button className={btnb46} id="b46" onClick={setSizefn} value="46">46</button>
                    <button className={btnb47} id="b47" onClick={setSizefn} value="47">47</button>
                    <button className={btnb48} id="b48" onClick={setSizefn} value="48">48</button>
                    <button className={btnb49} id="b49" onClick={setSizefn} value="49">49</button>
                    <button className={btnb50} id="b50" onClick={setSizefn} value="50">50</button> 
                </div>
            </div>

            <div className="row">
                <Products datas={searchfn(data)} />
            </div>
        </div>
    </React.Fragment>
  )
}

export default Wrapper