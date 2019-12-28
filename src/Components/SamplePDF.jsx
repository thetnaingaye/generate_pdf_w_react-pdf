import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";

import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  DataTableCell
} from "@david.kucsai/react-pdf-table";

const styles = StyleSheet.create({
  page: { backgroundColor: "#fff", padding: 10 },
  section: { color: "black", textAlign: "center", margin: 30 },
  table : {color:"black",backgroundColor:"peru"}
});

export function SamplePDF(props) {
  console.log("pdf props", props.data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Sample PDF</Text>
        </View>
        <View style={styles.table}>
          <Table
            data={[
              {
                firstName: "John",
                lastName: "Smith",
                dob: new Date(2000, 1, 1),
                country: "Australia",
                phoneNumber: "xxx-0000-0000"
              }
            ]}
          >
            <TableHeader textAlign={"center"}>
              <TableCell weighting={0.3}>First Name</TableCell>
              <TableCell weighting={0.3}>Last Name</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Phone Number</TableCell>
            </TableHeader>
            <TableBody>
              <DataTableCell weighting={0.3} getContent={r => r.firstName} />
              <DataTableCell weighting={0.3} getContent={r => r.lastName} />
              <DataTableCell getContent={r => r.dob.toLocaleString()} />
              <DataTableCell getContent={r => r.country} />
              <DataTableCell getContent={r => r.phoneNumber} />
            </TableBody>
          </Table>
        </View>
      </Page>
    </Document>
  );
}
