import React from 'react'
import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';

const PdfDocument = () => {

  const styles = StyleSheet.create({
    title: {
      fontSize: '16pt',
      textAlign: 'center',
      marginTop: '8pt'
    },
    companylogo: {
      width: '100pt',
      height: '100pt',
      marginBottom: '10pt'
    },
    section: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      marginBottom: 20,
      padding: 32
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      paddingRight: 10,
    },
    input: {
      marginBottom: 5,
      // border: '1px solid black',
      padding: 0,
      fontSize: '10pt',
      fontWeight: 'thin'
    },
    cinput: {
      marginBottom: 5,
      // border: '1px solid black',
      paddingLeft: '5pt',
      fontSize: '10pt',
      fontWeight: 'thin'
    },
    label: {
      marginBottom: 5,
      fontWeight: 'bold',
      fontSize: '12pt'
    },
    invoiceDetails: {
      width: '100%',
      paddingLeft: 20,
      backgroundColor: '#F0F8FF',
      marginTop: 20,
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      borderBottomLeftRadius: '10pt',
      borderBottomRightRadius: '10pt',
      borderTopLeftRadius: '10pt',
      borderTopRightRadius: '10pt',
    },
    invoiceHeader: {
      marginBottom: 10,
    },
    invoiceStatus: {
      display: "flex",
      flexDirection: "row",
      marginTop: 4,
      marginBottom: 4,
      alignItems: "center"
    },
    invoicelabels: {
      fontSize: "11pt",
      fontWeight: "bold"
    },
    sectiontwo: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      paddingLeft: 32,
      paddingRight: 32,
      borderBottomLeftRadius: '4pt',
      borderBottomRightRadius: '4pt',
      borderTopLeftRadius: '4pt',
      borderTopRightRadius: '4pt',
    },
    sectionthree: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      paddingLeft: 32,
      paddingRight: 32,
      borderBottomLeftRadius: '4pt',
      borderBottomRightRadius: '4pt',
      borderTopLeftRadius: '4pt',
      borderTopRightRadius: '4pt',

    },
    stwov1: {
      width: "45%",
      paddingLeft: 12,
      paddingTop: 12,
      paddingBottom: 12,
      backgroundColor: '#F0F8FF'
    },
    stwov2: {
      width: "13.75%",
      paddingLeft: 12,
      paddingTop: 12,
      paddingBottom: 12,
      textAlign: "center",
      backgroundColor: '#F0F8FF',
    },
    productv1: {
      width: "45%",
      paddingLeft: 12,
      paddingTop: 12,
      paddingBottom: 12,
      borderBottom: '0.5pt solid gray'
      // backgroundColor: '#F0F8FF',
    },
    productv2: {
      width: "13.75%",
      paddingLeft: 12,
      paddingTop: 12,
      paddingBottom: 12,
      textAlign: "center",
      borderBottom: '0.5pt solid gray'
      // backgroundColor: '#F0F8FF',
    },
    sectionfour: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      paddingLeft: 32,
      paddingRight: 32,
      justifyContent: 'flex-end'
    },
    sfourwrapper: {
      width: '50%',
      paddingLeft: 20,
      backgroundColor: '#F0F8FF',
      marginTop: 20,
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      borderBottomLeftRadius: '10pt',
      borderBottomRightRadius: '10pt',
      borderTopLeftRadius: '10pt',
      borderTopRightRadius: '10pt',
    },
    sfourv1: {
      display: "flex",
      flexDirection: "row",
      marginTop: 4,
      marginBottom: 4,
      alignItems: "center",
    },
    sfourv2: {
      display: "flex",
      flexDirection: "row",
      marginTop: 4,
      marginBottom: 4,
      alignItems: "center",
    },
    sfourlabel: {
      fontSize: '11pt'
    },
    sfourtext: {
      fontSize: '10pt',
      // fontWeight:'bold'
    },
    sectionfive: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingLeft: 32,
      paddingRight: 32,
      marginVertical: "20pt"
    },
    sfivetext1: {
      fontSize: '11pt',
      marginVertical: "8pt"
    },
    sfivetext2: {
      fontSize: '10pt',
    }
  });

  return (
    <>
      <Document>
        <Page >

          <Text style={styles.title}>INVOICE</Text>
          {/* First section */}
          <View style={styles.section}>
            <View style={styles.column}>
              <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/225px-Starbucks_Corporation_Logo_2011.svg.png" style={styles.companylogo} />
              <Text style={styles.input}>Your Company</Text>
              <Text style={styles.input}>Company Email</Text>
              <Text style={styles.input}>Company's Address</Text>
              <Text style={styles.input}>Company's Phone no</Text>
              <Text style={styles.input}>Zip Code</Text>
              <Text style={styles.input}>City</Text>
              <Text style={styles.input}>Country</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>BILLED TO</Text>
              <Text style={styles.cinput}>Customer's Name</Text>
              <Text style={styles.cinput}>Customer's Phone no</Text>
              <Text style={styles.cinput}>Customer's Email</Text>
              <Text style={styles.cinput}>Customer's Address</Text>
              <Text style={styles.cinput}>Zip Code</Text>
              <Text style={styles.cinput}>City</Text>
              <Text style={styles.cinput}>Country</Text>

              <View style={styles.invoiceDetails}>
                <View style={styles.invoiceStatus}>
                  <Text style={styles.invoicelabels}>Invoice no &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</Text>
                  <Text style={styles.input}>A-3658</Text>
                </View>
                <View style={styles.invoiceStatus}>
                  <Text style={styles.invoicelabels}>Invoice Date&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</Text>
                  <Text style={styles.input}>25/03/2024</Text>
                </View>
                <View style={styles.invoiceStatus}>
                  <Text style={styles.invoicelabels}>Due Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</Text>
                  <Text style={styles.input}>30/04/2024</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Second section */}
          <View style={styles.sectiontwo}>
            <View style={styles.stwov2}>
              <Text style={styles.input}>Sl no</Text>
            </View>
            <View style={styles.stwov1}>
              <Text style={styles.input}>Product Name</Text>
            </View>
            <View style={styles.stwov2}>
              <Text style={styles.input}>Qty</Text>
            </View>
            <View style={styles.stwov2}>
              <Text style={styles.input}>Rate</Text>
            </View>
            <View style={styles.stwov2}>
              <Text style={styles.input}>Amount</Text>
            </View>
          </View>

          {/* Third section */}
          <View style={styles.sectionthree}>
            <View style={styles.productv2}>
              <Text style={styles.input}>1</Text>
            </View>
            <View style={styles.productv1}>
              <Text style={styles.input}>Acer Aspire 7</Text>
            </View>
            <View style={styles.productv2}>
              <Text style={styles.input}>2</Text>
            </View>
            <View style={styles.productv2}>
              <Text style={styles.input}>49999</Text>
            </View>
            <View style={styles.productv2}>
              <Text style={styles.input}>100000</Text>
            </View>
          </View>


          <View style={styles.sectionfour}>
            <View style={styles.sfourwrapper}>
              <View style={styles.sfourv1}>
                <Text style={styles.sfourlabel}>Sub Total &nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</Text>
                <Text style={styles.sfourtext}>49000</Text>
              </View>
              <View style={styles.sfourv1}>
                <Text style={styles.sfourlabel}>Tax percent &nbsp;:-&nbsp;</Text>
                <Text style={styles.sfourtext}>10</Text>
              </View>
              <View style={styles.sfourv2}>
                <Text style={styles.sfourlabel}>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</Text>
                <Text style={styles.sfourtext}>89568</Text>
              </View>
            </View>
          </View>


          <View style={styles.sectionfive}>
            <Text style={styles.sfivetext1}>Notes</Text>
            <Text style={styles.sfivetext2}>It was good doing buissness with you.</Text>
          </View>

          <View style={styles.sectionfive}>
            <Text style={styles.sfivetext1}>Terms & Conditions</Text>
            <Text style={styles.sfivetext2}>Please make the payment by the due date.</Text>
          </View>

        </Page>
      </Document>
    </>
  )
}

export default PdfDocument
