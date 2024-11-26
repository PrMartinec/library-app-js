import app from './app.js';
import logger from './utils/loggerUtil.js';

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    logger.info(`Server is running at http://localhost:${PORT}`);
});