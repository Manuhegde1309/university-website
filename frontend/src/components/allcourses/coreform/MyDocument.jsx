// MyDocument.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: 30,
    },
});

const MyDocument = ({ formData }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Student Name: {formData.studentName}</Text>
                    <Text>Father Name: {formData.fatherName}</Text>
                    <Text>Mother Name: {formData.motherName}</Text>
                    <Text>College Name: {formData.collegeName}</Text>
                    <Text>School Name: {formData.schoolName}</Text>
                    <Text>Class 10 Marks: {formData.class10Marks}</Text>
                    <Text>
                        Class 10 Percentage: {formData.class10Percentage}
                    </Text>
                    <Text>Class 12 Marks: {formData.class12Marks}</Text>
                    <Text>
                        Class 12 Percentage: {formData.class12Percentage}
                    </Text>
                    <Text>Address: {formData.address}</Text>
                    <Text>Aadhar Number: {formData.aadharNumber}</Text>
                    <Text>Course Selection: {formData.courseSelection}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default MyDocument;
