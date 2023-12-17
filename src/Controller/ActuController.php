<?php

namespace App\Controller;

use App\Entity\Actu;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ActuController extends AbstractController
{
    #[Route('/presentation', name: 'app_presentation')]
    public function presentation(): Response
    {
        return $this->render('pages/presentation.html.twig');
    }

    
    #[Route('/allEvents', name: 'app_all_events')]
    public function allEvents(EntityManagerInterface $em): Response
    {
        $events = $em->getRepository(Actu::class)->findAll();
        return $this->render('pages/allEvents.html.twig', [
            'events' => $events,
        ]);
    }

    #[Route('/actu/liste/{mois}', name: 'app_liste_actu')]
    public function listeActu(int $mois, EntityManagerInterface $em): Response
    {
        $actus = $em->getRepository(Actu::class)->findByMonth($mois);
        return $this->render('pages/list_actu.html.twig', [
            'actus' => $actus,
        ]);
    }

    #[Route('/actu/liste/{annee}', name: 'app_liste_actu_annuel')]
    public function listeActuAnnuel(string $annee, EntityManagerInterface $em): Response
    {
        $actus = $em->getRepository(Actu::class)->findByMonth($annee);
        return $this->render('pages/list_actu.html.twig', [
            'actus' => $actus,
        ]);
    }

    #[Route('/projets', name: 'app_projets')]
    public function projets(): Response
    {
        return $this->render('pages/projet.html.twig');
    }

    #[Route('/actu/{id}', name: 'app_actu')]
    public function actu(int $id, EntityManagerInterface $em): Response
    {
        $actu = $em->getRepository(Actu::class)->find($id);
        if (!$actu) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }
        return $this->render('pages/fiche_actu.html.twig', [
            'actu' => $actu,
        ]);
    }
}
