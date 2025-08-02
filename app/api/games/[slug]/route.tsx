import path from 'path';
import { promises as fs } from 'fs';
import { Game } from '@/app/db/game';

export async function GET(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  try {
    const filePath = path.join(process.cwd(), 'app', 'db', 'games.json');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const games: Game[] = JSON.parse(fileContents);

    const game = Object.values(games).find(game => game.slug === slug);

    if (!game) return new Response('Game not found', { status: 404 });

    return new Response(JSON.stringify(game), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response('Error reading game data - ' + error, { status: 500 });
  }
}
