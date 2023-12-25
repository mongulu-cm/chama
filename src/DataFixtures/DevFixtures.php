<?php
// src/DataFixtures/AppFixtures.php
namespace App\DataFixtures;

use App\Entity\Actu;
use App\Entity\Album;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class DevFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $titles = ['Nouvel événement', 'Mise à jour importante', 'Nouveau membre', 'Changement de lieu', 'Rappel'];
        $contents = [
            'Nous avons un nouvel événement à venir...',
            'Il y a une mise à jour importante que vous devez savoir...',
            'Nous avons un nouveau membre dans notre association...',
            'Le lieu de notre prochain événement a changé...',
            'Ceci est un rappel pour notre prochain événement...'
        ];
        $dates = [
            '2023-01-01',
            '2023-02-01',
            '2023-03-01', 
            '2023-04-01', 
            '2023-05-01', 
            '2023-06-01', 
            '2023-07-01', 
            '2023-09-01', 
            '2023-10-01', 
            '2023-11-01', 
            '2023-12-01'
        ];
        $nameImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];

        for ($i = 0; $i < 20; $i++) {
            // Créez une nouvelle entité Actu
            $actu = new Actu();

            // Définissez les valeurs des propriétés de l'entité
            $actu->setTitre($titles[$i % count($titles)] . ' ' . $i);
            $actu->setContenu($contents[$i % count($contents)] . ' ' . $i);
            $actu->setPublishAt(new \DateTimeImmutable($dates[$i % count($dates)]));
            $actu->setImageAffiche('https://picsum.photos/200/300');

            if ($i % 2 == 0) {
                for($j = 0; $j< 8; $j++) {
                    $album = new Album();
                    $album->setImageAlbum($nameImages[$j]);
                    $manager->persist($album);
                    $actu->addAlbum($album);
                }
            }

            // Ajoutez l'entité au gestionnaire d'entités
            $manager->persist($actu);
        }

        // Test user with admin roles
        $member = new \App\Entity\Member();
        $member->setUsername('admin');
        $member->setPassword('admin');
        $member->setRoles(['ROLE_ADMIN']);

        $manager->persist($member);

        // Enregistrez toutes les entités
        $manager->flush();
    }
}
