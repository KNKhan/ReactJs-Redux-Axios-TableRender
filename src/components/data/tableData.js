import React, { Component, PropTypes } from 'react';
import './table.scss';

const Data = props =>  {
  console.log('props data', props.rowData);
  
  return (
    <div>
      {!props.rowData.content ? null
      :
        <table>
          <thead>
            <tr>
              {!props.rowData.state.header ? null
              :
              props.rowData.state.header.map((item, index) => <th key={index}>{item}</th>)
              }              
            </tr>
          </thead>
          <tbody>            
            {props.rowData.content.map((cellData, index) => 
              <tr key={index}>
                <td>{cellData.name}</td>
                <td>{cellData.alpha2Code}, {cellData.alpha3Code}</td>
                <td>{cellData.callingCodes}</td>
                <td>{cellData.capital}</td>
                <td>{cellData.altSpellings}</td>                
                <td>{cellData.region}</td>
                <td>{cellData.subregion}</td>
                <td>{cellData.population}</td>
                <td>{cellData.latlng}</td>
                <td>{cellData.demonym}</td>
                <td>{cellData.area}</td>
                <td>{cellData.gini}</td>
                <td>{cellData.timezones}</td>
                <td>
                  {cellData.borders.map(border => border)}
                </td>
                <td>{cellData.nativeName}</td>
                <td>{cellData.numericCode}</td>
                <td>
                  {cellData.currencies.map((currency, index) => 
                    <span key={index}>
                      {currency.code}
                      {currency.name}
                      {currency.symbol}
                    </span>            
                  )}
                </td>
                <td>
                  {cellData.languages.map((language, index) =>
                    <span key={index}>
                      {language.name}
                      {language.nativeName}
                    </span>
                  )}
                </td>
                <td className='flag'><img src={cellData.flag} /></td>
                <td>
                  {cellData.regionalBlocs.map((bloc, index) =>
                    <span key={index}>
                      {bloc.name} 
                      {bloc.acronym}
                    </span>
                  )}
                </td>
                <td>       
                  {cellData.translations.de}
                  {cellData.translations.es}
                  {cellData.translations.fr}
                  {cellData.translations.ja}
                  {cellData.translations.it}
                  {cellData.translations.br}
                  {cellData.translations.pt}
                  {cellData.translations.nl}
                  {cellData.translations.hr}
                  {cellData.translations.fa}
                </td>
                <td>
                  {cellData.cioc}
                </td>
              </tr>
            )            
            }
          </tbody>
        </table>
      }        
    </div>
  )
}

export default Data;