import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';


const certifications = [
  {
    title: 'Machine Learning Certification',
    organization: 'Coursera',
    date: 'June 2024',
  },
  {
    title: 'Python for Data Science',
    organization: 'edX',
    date: 'April 2024',
  },
  {
    title: 'Power BI Certification',
    organization: 'Microsoft',
    date: 'March 2024',
  },
];

function Contact() {
  return (
    <Container style={{ padding: '20px', fontFamily: 'serif' }}>
      <Typography variant="h4" gutterBottom>
        Contact Page
      </Typography>
      <Typography variant="h6" gutterBottom>
        Get in touch with us!
      </Typography>
      <Grid container spacing={3}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {cert.title}
                </Typography>
                <Typography color="textSecondary">
                  {cert.organization}
                </Typography>
                <Typography color="textSecondary">
                  {cert.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Contact;
