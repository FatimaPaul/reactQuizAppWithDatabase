import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Admin() {
  const [options, setOptions] = useState([]);
  const [optVal, setOptVal] = useState("");
  const [corrAns, setCorrAns] = useState("");
  const [question, setQuestion] = useState("");
  const [questionArr, setQuestionArr] = useState([]);

  function handleAddOption() {
    setOptions([...options, optVal]);
  }

  function handleRender() {
    const questionObj = {
      question: question,
      options: options,
      correctAnswer: corrAns,
    };

    setQuestionArr([...questionArr, questionObj]);
    setQuestion("");
    setCorrAns("");
    setOptVal("");
    setOptions([]);
  }

  return (
    <div className="h-body background">
      <div className="admin-content">
        <section className="section-1-admin">
          <h1>admin profile</h1>
        </section>
        <section className="section-2-admin">
          <Box className="mb-5">
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "30%", marginTop: "25px" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Quiz Name"
                variant="outlined"
                color="secondary"
              />

              <TextField
                id="outlined-basic"
                label="Quiz Duration"
                variant="outlined"
                color="secondary"
              />

              <TextField
                id="outlined-basic"
                label="Secret key"
                variant="outlined"
                color="secondary"
              />

              <TextField
                id="outlined-basic"
                label="Quiz Open"
                variant="outlined"
                color="secondary"
              />

              <TextField
                id="outlined-basic"
                label="Quiz Description"
                variant="outlined"
                color="secondary"
              />
            </Box>

            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "10%", marginTop: "25px" },
              }}
            >
              <Button variant="contained" size="large" color="secondary">
                Lock
              </Button>

              <Button variant="contained" size="large" color="error">
                Save
              </Button>
            </Box>
          </Box>

          <Box className="mb-5">
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "95%" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Question"
                variant="outlined"
                color="secondary"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Box>

            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "75%" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Option"
                variant="outlined"
                color="secondary"
                value={optVal}
                onChange={(e) => setOptVal(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "10%" },
              }}
            >
              <Button
                size="large"
                variant="contained"
                color="secondary"
                onClick={handleAddOption}
              >
                Add
              </Button>
            </Box>
          </Box>

          <Box className="mb-5">
            {options.map((x, i) => (
              <Button
                key={i}
                variant="outlined"
                color="secondary"
                className="me-3"
                onClick={() => setCorrAns(options[i])}
              >
                {x}
              </Button>
            ))}

            {corrAns ? (
              <Button variant="contained" color="success">
                {corrAns}
              </Button>
            ) : (
              ""
            )}
          </Box>

          <Box className="render-question">
            <h3>{question}</h3>
            {options.map((x) => (
              <li>{x}</li>
            ))}
            {corrAns ? (
              <p className="text-success">Correct Answer: {corrAns}</p>
            ) : (
              ""
            )}
            <Button variant="contained" color="error" onClick={handleRender}>
              Done
            </Button>
          </Box>
        </section>
      </div>
    </div>
  );
}
