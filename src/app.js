import express from 'express';

const app = express();

const PORT = process.env.PORT || 6000;

export default {
  start: () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  },
};
