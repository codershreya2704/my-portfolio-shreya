'use client';
import { Box, Typography, Button, Grid, Card, CardContent, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub, Phone } from '@mui/icons-material';

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fafafa',
        color: '#111',
        fontFamily: 'Poppins, sans-serif',
        scrollBehavior: 'smooth',
      }}
    >
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Box
          id="home"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: 2,
            background: 'linear-gradient(155deg, #6a11cb 0%, #2575fc 100%)',
            color: 'white',
          }}
        >
          <motion.div variants={fadeUp}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Hi, I’m <span style={{ color: '#ffeb3b' }}>Shreya Tambad</span> 👋
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Frontend Developer | React | Next.js | Material UI
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#fff',
                color: '#2575fc',
                fontWeight: 600,
                px: 4,
                py: 1,
                borderRadius: '25px',
                '&:hover': { backgroundColor: '#f1f1f1' },
              }}
              href="#contact"
            >
              Contact Me
            </Button>
          </motion.div>
        </Box>
      </motion.div>

      <Box id="about" sx={{ py: 10, textAlign: 'center', backgroundColor: '#fff' }}>
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <Typography variant="h4" fontWeight={700} gutterBottom color="#2575fc">
            What I Do
          </Typography>
          <Typography variant="body1" maxWidth={700} mx="auto" color="#555" sx={{ mb: 5 }}>
            Im a passionate frontend developer focused on crafting modern, responsive, and visually appealing websites.
            I love bringing ideas to life through clean code, intuitive UX, and creative design.
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {[
            { title: 'UI/UX Design', desc: 'Crafting visually engaging and user-friendly interfaces.' },
            { title: 'Frontend Development', desc: 'Building fast, interactive, and responsive web apps.' },
            { title: 'Performance Optimization', desc: 'Ensuring smooth and efficient user experiences.' },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: '20px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                    p: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 20px rgba(37,117,252,0.2)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight={600} color="#2575fc">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="#555">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>


      <Box id="experience" sx={{ py: 10, px: 3, backgroundColor: '#fafafa' }}>
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom color="#2575fc">
            Experience
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          {[
            {
              role: 'Frontend Developer Intern',
              company: 'Payplex Solutions',
              duration: 'Feb 2025 - Present',
              desc: 'Developed and maintained an e-commerce platform using Next.js, Material UI, and APIs.',
            },
            {
              role: 'Unity Developer Intern',
              company: 'JANGS Technologies',
              duration: 'Aug 2023 - Sep 2023',
              desc: 'Developed a 3D metaverse car showroom in Unity and led project planning for seamless execution.',
            },
          ].map((exp, i) => (
            <Grid item xs={12} sm={6} md={5} key={i}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: '#fff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '16px',
                    boxShadow: '0 5px 10px rgba(0,0,0,0.08)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight={600} color="#111">
                      {exp.role}
                    </Typography>
                    <Typography variant="subtitle2" color="#2575fc">
                      {exp.company} | {exp.duration}
                    </Typography>
                    <Typography variant="body2" color="#555" mt={1}>
                      {exp.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box id="projects" sx={{ py: 10, px: 3, backgroundColor: '#fff' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            gutterBottom
            color="#2575fc"
          >
            Projects
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          {[
            {
              title: 'E-commerce App',
              desc: 'Next.js + MUI + API Integration',
              github: 'https://github.com/codershreya2704/ecommerce-project',
            },
            {
              title: 'Portfolio Website',
              desc: 'Responsive personal portfolio with animations',
              github: 'https://github.com/codershreya2704/drone-survey-app',
            },
            {
              title: 'Task Tracker',
              desc: 'React app to organize daily work efficiently',
              github: 'https://github.com/codershreya2704/portfolio',
            },
          ].map((project, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: '20px',
                    boxShadow: '0 10px 15px rgba(0,0,0,0.08)',
                    p: 2,
                    border: '1px solid black',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 20px rgba(37,117,252,0.2)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight={600} color="#2575fc">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="#555" sx={{ mb: 2 }}>
                      {project.desc}
                    </Typography>
                    <Button
                      variant="outlined"
                      href={project.github}
                      target="_blank"
                      sx={{
                        borderColor: '#2575fc',
                        color: '#2575fc',
                        fontWeight: 600,
                        borderRadius: '20px',
                        '&:hover': {
                          backgroundColor: '#2575fc',
                          color: '#fff',
                        },
                      }}
                    >
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>



      <Box id="contact" sx={{ py: 10, textAlign: 'center', backgroundColor: '#fff' }}>
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <Typography variant="h4" fontWeight={700} gutterBottom color="#2575fc">
            Let’s Connect
          </Typography>
          <Typography variant="body1" color="#555" maxWidth={600} mx="auto" mb={4}>
            Have a project in mind or want to collaborate? Feel free to reach out. I’d love to hear from you!
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: 'rgba(37,117,252,0.05)',
              borderRadius: 3,
              p: 4,
              maxWidth: 500,
              mx: 'auto',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Email color="primary" />
              <Link
                href="mailto:youremail@example.com"
                underline="hover"
                sx={{ color: '#111', fontWeight: 500 }}
              >
                shreyrt411@gmail.com
              </Link>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <LinkedIn color="primary" />
              <Link
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                underline="hover"
                sx={{ color: '#111', fontWeight: 500 }}
              >
                https://www.linkedin.com/in/shreyatambad/
              </Link>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <GitHub color="primary" />
              <Link
                href="https://github.com/yourgithub"
                target="_blank"
                underline="hover"
                sx={{ color: '#111', fontWeight: 500 }}
              >
                https://github.com/codershreya2704
              </Link>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Phone color="primary" />
              <Typography sx={{ color: '#111', fontWeight: 500 }}>
                +91 9623075109
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
}
